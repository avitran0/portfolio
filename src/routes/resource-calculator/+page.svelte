<script lang="ts">
    import { onDestroy } from "svelte";

    import { fadeIn, fadeOut } from "$lib/transition";
    import { fmt, language } from "$lib/intl";

    import { ItemConversion, Items } from "./ts/recipes";
    import { type Item } from "./ts/types";
    import SchematicWorker from "./ts/schematic-webworker?worker";

    const sampleFiles = {
        "very-small.nbt": "Very Small",
        "small.litematic": "Small",
        "medium.schematic": "Medium",
        "large.litematic": "Large",
        "very-large.litematic": "Very Large",
    };

    const enableItemSelect = false;

    let sampleDialog: HTMLDialogElement;
    let sampleSizeButtons: HTMLDivElement;

    let schematicInput: HTMLInputElement;
    let schematicFiles: FileList | null = null;
    let schematicFileName: string = $fmt("resource-calculator.select-file");

    let itemDialog: HTMLDialogElement;
    let itemInput: HTMLInputElement;
    let itemAmount: number | null;
    let itemDisplay: HTMLDivElement;

    let exportImportDialog: HTMLDialogElement;

    let itemDataList: HTMLDataListElement;
    let sortMethod: string;

    // get first item's id
    let selectedItem: Item | null = null;

    let items: Record<string, number> = {};
    let ingredients: Record<string, number> = {};
    let displayedItems: [Item, number][] = [];
    let displayedIngredients: [Item, number][] = [];

    let shouldDisplayItems = false;
    let shouldDisplayIngredients = true;

    const x = language.subscribe((value) => {
        schematicFileName = getSchematicName();
    });
    onDestroy(() => x());

    function resetDisplayedCategories() {
        shouldDisplayItems = false;
        shouldDisplayIngredients = true;
    }

    let workers: Record<string, Worker> = {};
    let activeWorkers = 0;
    let working = false;

    function openItemDialog() {
        itemInput.value = "";
        itemAmount = null;
        selectedItem = null;
        itemDialog.showModal();
    }

    function incrementItemCount() {
        if (!itemAmount) {
            itemAmount = 1;
            return;
        }
        itemAmount++;
    }

    function decrementItemCount() {
        if (!itemAmount) {
            itemAmount = 1;
        }
        itemAmount--;
        if (itemAmount <= 0) {
            itemAmount = 1;
        }
    }

    function getSchematicName(): string {
        if (!schematicFiles || schematicFiles.length <= 0) {
            return $fmt("resource-calculator.select-file");
        }
        let name = "";
        // comma separate names, remove extension
        for (let i = 0; i < schematicFiles.length; i++) {
            name += schematicFiles[i].name.replace(/\.[^/.]+$/, "");
            if (i < schematicFiles.length - 1) {
                name += ", ";
            }
        }
        return name;
    }

    function schematicInputChange() {
        if (!schematicInput.files || schematicInput.files.length <= 0) {
            schematicFileName = $fmt("resource-calculator.select-file");
            return;
        }
        working = true;
        clearItems();
        const files = schematicInput.files;
        schematicFiles = files;
        schematicFileName = getSchematicName();

        for (const file of files) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const arrayBuffer = event.target?.result as ArrayBuffer;
                startWorker(arrayBuffer, file.name);
            };
            reader.readAsArrayBuffer(file);
        }
    }

    function addItems() {
        if (!selectedItem || !itemAmount) {
            return;
        }
        if (items[selectedItem.id]) {
            items[selectedItem.id] += itemAmount;
        } else {
            items[selectedItem.id] = itemAmount;
        }
        ingredients = calculateAllItems(items);
        display();
    }

    function removeItems() {
        if (!selectedItem || !itemAmount) {
            return;
        }
        if (items[selectedItem.id]) {
            items[selectedItem.id] -= itemAmount;
            if (items[selectedItem.id] <= 0) {
                delete items[selectedItem.id];
            }
        }
        ingredients = calculateAllItems(items);
        display();
    }

    function itemInputChanged() {
        const selected = itemInput.value.toLowerCase();
        const item =
            Object.values(Items).find((item) => item.id === selected || item.name.toLowerCase() === selected) ?? null;
        selectedItem = item;
    }

    function clearItems() {
        items = {};
        ingredients = {};
        display();
    }

    function clearSchematicInput() {
        schematicInput.value = "";
        schematicFiles = null;
        schematicFileName = $fmt("resource-calculator.select-file");
    }

    async function loadSampleFile(fileName: string) {
        working = true;
        clearItems();
        sampleDialog.close();
        const file = await fetch("/schematics/" + fileName);
        const arrayBuffer = await file.arrayBuffer();
        startWorker(arrayBuffer, fileName);
    }

    function startWorker(arrayBuffer: ArrayBuffer, name: string) {
        workers[name] = new SchematicWorker();
        workers[name].onmessage = (event) => {
            const itms = event.data as Record<string, number>;
            workers[name].terminate();

            resetDisplayedCategories();

            // replace unknown items with items from ItemConversion, or air if missing
            for (const [key, value] of Object.entries(itms)) {
                let item = getItemFromId(key);
                if (!item) {
                    continue;
                }
                // if item exists in items, add to it
                if (items[item.id]) {
                    items[item.id] += value;
                } else {
                    items[item.id] = value;
                }
            }

            ingredients = calculateAllItems(items);
            display();

            delete workers[name];
            if (Object.keys(workers).length === 0) {
                activeWorkers = 0;
            } else {
                activeWorkers--;
            }
            if (activeWorkers <= 0) {
                working = false;
            }
        };
        workers[name].postMessage({ arrayBuffer });
        activeWorkers++;
    }

    function calculateAllItems(toCalculate: Record<string, number>) {
        const rawIngredients: Record<string, number> = {};
        for (const [key, value] of Object.entries(toCalculate)) {
            if (key === "air") continue;
            let item = getItemFromId(key);
            if (!item) continue;
            const result = calculateItem(item, value);
            for (const [key, value] of Object.entries(result)) {
                if (key in rawIngredients) {
                    rawIngredients[key] += value;
                } else {
                    rawIngredients[key] = value;
                }
            }
        }
        return rawIngredients;
    }

    function calculateItem(item: Item, quantity: number) {
        if (!item) {
            return {};
        }
        if ("baseItem" in item.recipe && item.recipe.baseItem) {
            return { [item.id]: quantity };
        }

        const recipe = item.recipe;
        if (!("ingredients" in recipe)) return {};
        const result: Record<string, number> = {};
        for (const ingredient of recipe.ingredients) {
            // check if ingredient is a tag
            const ingredientItem = Items[ingredient.id];

            const ingredientQuantity = Math.ceil((quantity / recipe.result) * ingredient.quantity);
            const ingredientResult = calculateItem(ingredientItem, ingredientQuantity);
            for (const [key, value] of Object.entries(ingredientResult)) {
                if (key in result) {
                    result[key] += value;
                } else {
                    result[key] = value;
                }
            }
            if (Object.keys(ingredientResult).length === 0) {
                console.warn("Missing recipe for " + ingredient.id + " in " + item.id, item);
            }
        }
        return result;
    }

    function calculateTotalItemCount(data: Record<string, number>): number {
        // don't count air
        let total = 0;
        for (const [key, value] of Object.entries(data)) {
            if (key === "air") continue;
            total += value;
        }
        return total;
    }

    function display() {
        displayItems();
        displayIngredients();
    }

    function displayItems() {
        displayedItems = [];
        const toDisplay = sortItems(items);
        for (const [key, value] of Object.entries(toDisplay)) {
            if (key === "air") continue;
            let item = getItemFromId(key);
            if (item) displayedItems.push([item, value]);
        }
    }

    function displayIngredients() {
        displayedIngredients = [];
        const toDisplay = sortItems(ingredients);
        for (const [key, value] of Object.entries(toDisplay)) {
            if (key === "air") continue;
            let item = getItemFromId(key);
            if (item) displayedIngredients.push([item, value]);
        }
    }

    function getItemFromId(id: string): Item | null {
        let item = Items[id];
        if (item) return item;
        const convId = ItemConversion[id];
        if (!convId) {
            console.error("Item not found", id);
            return null;
        }
        if (convId === "air") return null;
        const item2 = Items[convId];
        if (!item2) {
            console.error("Item not found at all", id);
            return null;
        }
        return item2;
    }

    function sortItems(itms: Record<string, number>) {
        const sorted: Record<string, number> = {};
        const keys = Object.keys(itms);
        if (sortMethod === "name") {
            keys.sort((a, b) => {
                const itemA = Items[a];
                const itemB = Items[b];
                if (!itemA) {
                    console.warn("Item not found", a);
                    return 0;
                }
                if (!itemB) {
                    console.warn("Item not found", b);
                    return 0;
                }
                return itemA.name.localeCompare(itemB.name);
            });
        }
        if (sortMethod === "amount") {
            keys.sort((a, b) => itms[b] - itms[a]);
        }
        for (const key of keys) {
            sorted[key] = itms[key];
        }
        itms = sorted;
        return sorted;
    }

    function exportItems() {
        if (Object.keys(items).length === 0) {
            console.info("No items to export");
            return;
        }
        const data = JSON.stringify(items);
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        if (schematicFiles && schematicFiles.length > 0) {
            a.download = getSchematicName() + ".json";
        } else {
            a.download = "items.json";
        }
        a.click();
    }

    function importItems() {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = ".json";
        input.onchange = async (event) => {
            if (!input.files || input.files.length <= 0) return;
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                if (!event.target?.result) return;
                const data = JSON.parse(event.target.result as string);
                // remove all unknown items
                for (const key of Object.keys(data)) {
                    if (!Items[key]) {
                        delete data[key];
                    }
                }
                items = data;
                ingredients = calculateAllItems(items);
                display();
            };
            reader.readAsText(file);
        };
        input.click();
    }

    function testDataIntegrity(items: Record<string, Item>) {
        let i = 0;
        for (const [id, item] of Object.entries(items)) {
            let success = true;
            if (id !== item.id) {
                console.error("ID mismatch", id, item.id);
                success = false;
            }
            if (!item.name) {
                console.warn("No name", id);
                success = false;
            }
            calculateItem(item, 1);
            if (success) {
                i++;
            }
        }
        sortByKey(items);
        console.info("successfully loaded " + i + " items");
    }

    function sortByKey(items: Record<string, Item>) {
        const sorted: Record<string, Item> = {};
        const keys = Object.keys(items).sort();
        for (const key of keys) {
            sorted[key] = items[key];
        }
        // sort ingredients, if they exist
        for (const [key, item] of Object.entries(sorted)) {
            if ("ingredients" in item.recipe) {
                item.recipe.ingredients.sort((a, b) => a.id.localeCompare(b.id));
            }
        }
        //console.info(sorted);
        return sorted;
    }

    testDataIntegrity(Items);
    resetDisplayedCategories();
</script>

<svelte:head>
    <title>{$fmt("resource-calculator.title")}</title>
    <meta name="description" content="Calculate raw ingredients for schematics" />
</svelte:head>

<main in:fadeIn out:fadeOut>
    <h1>{$fmt("resource-calculator.title")}</h1>
    <div id="schematic-controls">
        <button on:click={() => sampleDialog.showModal()} aria-label="Load a sample file"
            >{$fmt("resource-calculator.load-sample")}</button>
        <dialog id="sample-select" bind:this={sampleDialog}>
            <h2>{$fmt("resource-calculator.select-sample-size")}</h2>
            <div class="dialog-btns" bind:this={sampleSizeButtons}>
                {#each Object.entries(sampleFiles) as [file, name]}
                    <button on:click={() => loadSampleFile(file)} aria-label="Load the {name} sample"
                        >{$fmt(`resource-calculator.sample.${file.split(".")[0]}`)}</button>
                {/each}
            </div>
            <button on:click={() => sampleDialog.close()} aria-label="Close sample dialog"
                >{$fmt("general.close")}</button>
        </dialog>
        <label
            for="schematic"
            id="schematic-label"
            class={schematicFiles && schematicFiles.length > 0 ? "selected" : ""}>
            <input
                type="file"
                name="schematic"
                id="schematic"
                accept=".nbt,.litematic,.schem,.schematic"
                multiple
                bind:this={schematicInput}
                on:change={schematicInputChange} />
            <span class="first">{schematicFileName}</span>
            <span class="second">{$fmt("general.browse")}</span>
            <button id="clear-file" on:click={clearSchematicInput} aria-label="Clear selected file">X</button>
        </label>
        <div>
            {#if enableItemSelect}
                <button on:click={openItemDialog}>{$fmt("resource-calculator.add-items")}</button>
            {/if}
            <button
                id="clear"
                on:click={() => {
                    clearItems();
                }}
                aria-label="Clear items shown">{$fmt("resource-calculator.clear-items")}</button>
        </div>
        <div id="sort-container">
            <span>{$fmt("general.sort-by")}:</span>
            <label for="sort" class="hide">Sort Items</label>
            <select name="sort" id="sort" bind:value={sortMethod} on:change={() => display()}>
                <option value="name">{$fmt("general.sort.name")}</option>
                <option value="amount">{$fmt("general.sort.amount")}</option>
            </select>
        </div>
        <button
            id="export-import"
            on:click={() => {
                exportImportDialog.showModal();
            }}
            aria-label="Open export or import data dialog">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3" />
                <path d="M4 6v6c0 1.657 3.582 3 8 3c1.118 0 2.183 -.086 3.15 -.241" />
                <path d="M20 12v-6" />
                <path d="M4 12v6c0 1.657 3.582 3 8 3c.157 0 .312 -.002 .466 -.005" />
                <path d="M16 19h6" />
                <path d="M19 16l3 3l-3 3" />
            </svg>
        </button>
        <div id="progress">
            {#if working}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="spinner">
                    <path d="M12 3a9 9 0 1 0 9 9" />
                </svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svg-green">
                    <path d="M5 12l5 5l10 -10" />
                </svg>
            {/if}
        </div>
    </div>
    {#if enableItemSelect}
        <dialog bind:this={itemDialog}>
            <h2>Select Items Manually</h2>
            <div class="dialog-btns">
                <img src={selectedItem ? "textures/" + selectedItem.id + ".png" : ""} alt="" id="item-preview" />
                <label for="item-input" class="hide">Enter Item name or id</label>
                <input
                    type="search"
                    name="item-input"
                    id="item-input"
                    placeholder="item name or id"
                    list="item-data"
                    bind:this={itemInput}
                    on:input={itemInputChanged} />
                <datalist bind:this={itemDataList}>
                    {#each Object.entries(Items) as [name, value]}
                        <option value={value.name} data-id={value.id} />
                    {/each}
                </datalist>
                <div id="item-amount-container">
                    <button id="minus" on:click={decrementItemCount} aria-label="Decrement selected item amount"
                        >-</button>
                    <label for="item-select-amount" class="hide">Enter Item amount</label>
                    <input
                        type="number"
                        name="item-select-amount"
                        id="item-select-amount"
                        placeholder="amount"
                        min="1"
                        pattern="\d*"
                        bind:value={itemAmount} />
                    <button id="plus" on:click={incrementItemCount} aria-label="Increment selected item amount"
                        >+</button>
                </div>
                <button on:click={addItems} aria-label="Add selected item">Add</button>
                <button on:click={removeItems} aria-label="Remove selected item">Remove</button>
            </div>
            <button on:click={() => itemDialog.close()} aria-label="Close item dialog">Close</button>
        </dialog>
    {/if}
    <dialog bind:this={exportImportDialog}>
        <h2>{$fmt("resource-calculator.export-import-data")}</h2>
        <button on:click={exportItems} aria-label="Export item data">{$fmt("general.export")}</button>
        <button on:click={importItems} aria-label="Import item data">{$fmt("general.import")}</button>
        <button on:click={() => exportImportDialog.close()} aria-label="Close export/import dialog">{$fmt("general.close")}</button>
    </dialog>

    <div id="items" bind:this={itemDisplay}>
        {#if displayedItems.length > 0}
            <button
                class="separator"
                on:click={() => {
                    shouldDisplayItems = !shouldDisplayItems;
                }}
                aria-label="Toggle display of items">
                <span>Total items: {calculateTotalItemCount(items).toLocaleString()}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style="transform: {shouldDisplayItems ? 'rotate(180deg)' : 'rotate(0deg)'}">
                    <path d="M6 15l6 -6l6 6" />
                </svg>
            </button>
        {/if}
        {#if shouldDisplayItems}
            {#each displayedItems as item}
                <div class="item">
                    <img src="textures/{item[0].id}.png" alt={item[0].name} />
                    <div class="item-text">
                        <span>{item[0].name}</span>
                        <span>{item[1].toLocaleString()}x</span>
                    </div>
                    <button
                        on:click={() => {
                            delete items[item[0].id];
                            ingredients = calculateAllItems(items);
                            display();
                        }}>X</button>
                </div>
            {/each}
        {/if}
        {#if displayedIngredients.length > 0}
            <button
                class="separator"
                on:click={() => {
                    shouldDisplayIngredients = !shouldDisplayIngredients;
                }}
                aria-label="Toggle display of ingredients">
                <span>Total ingredients: {calculateTotalItemCount(ingredients).toLocaleString()}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style="transform: {shouldDisplayIngredients ? 'rotate(180deg)' : 'rotate(0deg)'}">
                    <path d="M6 15l6 -6l6 6" />
                </svg>
            </button>
        {/if}
        {#if shouldDisplayIngredients}
            {#each displayedIngredients as ingredient}
                <div class="item">
                    <img src="textures/{ingredient[0].id}.png" alt={ingredient[0].name} />
                    <div class="item-text">
                        <span>{ingredient[0].name}</span>
                        <span>{ingredient[1].toLocaleString()}x</span>
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</main>

<style>
    dialog {
        background-color: var(--color-backdrop);
        border: 2px solid var(--color-text);
        border-radius: 0.5rem;
        transition: var(--transition-ease);
        color: var(--color-text);
    }

    dialog[open] {
        animation: show 0.5s ease normal;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    }

    dialog::backdrop {
        background-color: var(--color-dialog-bg);
        backdrop-filter: blur(0.5rem);
        -webkit-backdrop-filter: blur(0.5rem);
        transition: var(--transition-ease);
    }

    dialog[open]::backdrop {
        animation: show 0.5s ease normal;
    }

    img {
        width: 4rem;
        height: 4rem;
        aspect-ratio: 1 / 1;
        image-rendering: pixelated;
        border: none;
        outline: none;
    }

    select {
        font-family: var(--font-zilla-slab);
        font-size: var(--font-size-medium);
        cursor: pointer;
        color: var(--color-text);
        background-color: var(--color-highlight);
        border: none;
        flex-grow: 1;
        height: 100%;
        border-radius: 0 6px 6px 0;
        border: var(--border-text);
        margin: 0;
        transition: var(--transition-ease);
        padding: 0 0.5rem;
    }

    select:hover {
        border-color: var(--color-blue);
    }

    #sort-container {
        width: fit-content;
        height: 2.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        flex-wrap: nowrap;
        padding-left: 0.2rem;
        gap: 0 !important;
    }

    #sort-container > span {
        font-family: var(--font-zilla-slab);
        font-size: var(--font-size-medium);
        border: var(--border-text);
        border-right: none;
        border-radius: 0.5rem 0 0 0.5rem;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 0.5rem;
        cursor: default;
    }

    #item-preview {
        border: 2px solid var(--color-text);
        border-radius: 0.5rem;
    }

    #item-select-amount,
    #item-input {
        align-items: center;
        padding: 0.2rem 0.5rem;
        border: var(--border-text);
        font-size: var(--font-size-medium);
        transition: var(--transition-ease);
        background-color: transparent;
        appearance: textfield;
        width: 10.75rem;
        height: 2.6rem;
        font-family: var(--font-zilla-slab);
        color: var(--color-text);
    }

    #item-input {
        border-radius: 0.5rem;
        width: 16rem;
    }

    #item-select-amount:hover,
    #item-input:hover {
        border-color: var(--color-blue);
    }

    #item-select-amount:focus,
    #item-input:focus {
        outline: none;
    }

    #item-select-amount::placeholder,
    #item-input::placeholder {
        color: var(--color-subtext);
    }

    #item-select-amount::-webkit-inner-spin-button,
    #item-select-amount::-webkit-outer-spin-button {
        appearance: none;
        margin: 0;
    }

    #item-select-amount {
        border-right: none;
    }

    #plus,
    #minus {
        width: 2.6rem;
    }

    #plus {
        border-radius: 0 0.5rem 0.5rem 0;
    }

    #minus {
        border-radius: 0.5rem 0 0 0.5rem;
        border-right: none;
    }

    :global(#minus:hover + #item-select-amount) {
        border-left-color: var(--color-blue);
    }

    #item-select-amount:hover + #plus {
        border-left-color: var(--color-blue);
    }

    #item-amount-container {
        gap: 0;
        display: flex;
        align-items: center;
    }

    #schematic-controls {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border: var(--border-text);
        border-radius: 0.5rem;
        font-size: var(--font-size-medium);
        transition: var(--transition-ease);
        background-color: var(--color-backdrop);
        flex-wrap: wrap;
        width: fit-content;
    }

    #schematic-controls > div {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    label {
        font-family: var(--font-zilla-slab);
        font-size: var(--font-size-medium);
        color: var(--color-text);
    }

    #schematic-label {
        height: 2.6rem;
        width: 20rem;
        display: flex;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: var(--transition-ease);
    }

    #schematic {
        opacity: 0;
        width: 0;
        height: 0;
    }

    #schematic-label:has(> span:hover) {
        border-color: var(--color-blue);
    }

    #schematic-label > span.first {
        padding: 0 0 0 0.5rem;
        border-left: var(--border-text);
        border-top: var(--border-text);
        border-bottom: var(--border-text);
        border-radius: 0.5rem 0 0 0.5rem;
        border-color: inherit;
        transition: var(--transition-ease);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        line-height: 2.4rem;
        text-align: left;
    }

    #schematic-label > span.second {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 0 0.5rem;
        background-color: var(--color-highlight);
        height: 100%;
        border-radius: 0 6px 6px 0;
        border-top: var(--border-text);
        border-bottom: var(--border-text);
        border-right: var(--border-text);
        border-color: inherit;
        transition: var(--transition-ease);
    }

    #schematic-label.selected > span.second {
        border-radius: 0;
        border-right: none;
    }

    #schematic-label.selected:hover > button {
        border-left-color: var(--color-blue);
    }

    #schematic-label > button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: var(--color-highlight);
        color: var(--color-text);
        border-radius: 0 6px 6px 0;
        cursor: pointer;
        transition: var(--transition-ease);
        height: 100%;
        width: 0;
        font-size: 0;
        padding: 0;
        font-family: var(--font-zilla-slab);
    }

    #schematic-label.selected > button {
        width: 1rem;
        font-size: var(--font-size-small);
        padding: 0 1rem;
        border: var(--border-text);
    }

    #schematic-label > button:hover {
        color: var(--color-blue);
        border-color: var(--color-blue);
    }

    .dialog-btns {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    #items {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        padding: 0.5rem 0;
        justify-content: space-between;
        width: 100%;
    }

    .item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        transition: var(--transition-ease);
        border: var(--border-text);
        border-radius: 0.5rem;
        font-size: var(--font-size-small);
        font-family: var(--font-zilla-slab);
    }

    .item-text {
        display: flex;
        flex-direction: column;
        text-align: left;
    }

    .item > button {
        width: 2rem;
        height: 2rem;
        aspect-ratio: 1 / 1;
        border: var(--border-text);
        background-color: var(--color-highlight);
        color: var(--color-text);
        border-radius: 0.5rem;
        cursor: pointer;
        transition: var(--transition-ease);
        font-family: var(--font-zilla-slab);
        font-size: var(--font-size-small);
        margin-left: 0.5rem;
    }

    .item > button:hover {
        border-color: var(--color-blue);
    }

    .separator {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 0.5rem;
        align-items: center;
        min-height: 2.6rem;
        height: auto;
        text-align: left;
    }

    .separator > svg {
        width: 2rem;
        height: 2rem;
        aspect-ratio: 1 / 1;
        transition: none;
    }

    .separator:hover > svg {
        color: var(--color-blue);
    }

    .hide {
        clip: rect(0, 0, 0, 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
    }

    #export-import {
        width: 2.6rem;
        height: 2.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #progress {
        width: 2.6rem;
        height: 2.6rem;
        border: var(--border-text);
        border-radius: 0.5rem;
    }

    #progress > svg {
        width: 2rem;
        height: 2rem;
        aspect-ratio: 1 / 1;
    }

    .svg-green {
        stroke: var(--color-green);
    }

    #spinner {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 32rem) {
        .item {
            width: 100%;
        }

        .item button {
            margin-left: auto;
        }
    }

    @media (max-width: 22.5rem) {
        #schematic-label {
            width: 16rem;
        }
    }
</style>
