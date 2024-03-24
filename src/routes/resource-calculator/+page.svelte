<script lang="ts">
    import { fade } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    import { ItemConversion, Items } from "./ts/recipes";
    import { type Item } from "./ts/types";
    import SchematicWorker from "./ts/schematic-webworker?worker";

    const sampleFiles = {
        "very_small.nbt": "Very Small",
        "small.litematic": "Small",
        "medium.schematic": "Medium",
        "large.litematic": "Large",
        "very_large.litematic": "Very Large"
    };

    let sampleDialog: HTMLDialogElement;
    let sampleSizeButtons: HTMLDivElement;

    let schematicInput: HTMLInputElement;
    let schematicFiles: FileList | null = null;
    let schematicFileNameLabel: HTMLSpanElement;

    let itemDialog: HTMLDialogElement;
    let itemInput: HTMLInputElement;
    let itemAmount: number | null;
    let itemDisplay: HTMLDivElement;

    let itemDataList: HTMLDataListElement;
    let sortMethod: string;

    let spinner: HTMLDivElement;

    // get first item's id
    let selectedItem: Item | null = null;

    let items: Record<string, number> = {};
    let ingredients: Record<string, number> = {};
    let displayedItems: [Item, number][] = [];
    let displayedIngredients: [Item, number][] = [];

    let workers: Record<string, Worker> = {};
    let workerError: string | null = null;

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
            return "Select Schematic";
        }
        let name = "";
        // comma separate names, remove extension
        for (let i = 0; i < schematicFiles.length; i++) {
            name += schematicFiles[i].name.replace(/\.[^/.]+$/, "");
            if (i < schematicFiles.length - 1) {
                name += ", ";
            }
        }
        console.log(name);
        return name;
    }

    function schematicInputChange() {
        clearItems();
        if (!schematicInput.files || schematicInput.files.length <= 0) {
            schematicFileNameLabel.textContent = "Select Schematic";
            return;
        }
        const files = schematicInput.files;
        schematicFiles = files;
        schematicFileNameLabel.textContent = getSchematicName();

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
        schematicFileNameLabel.textContent = "Select Schematic";
    }

    async function loadSampleFile(fileName: string) {
        sampleDialog.close();
        const file = await fetch("/schematics/" + fileName);
        const arrayBuffer = await file.arrayBuffer();
        startWorker(arrayBuffer, fileName);
    }

    function startWorker(arrayBuffer: ArrayBuffer, name: string) {
        spinner.style.display = "block";
        workers[name] = new SchematicWorker();
        //items = loadSchematic(arrayBuffer);
        workers[name].onmessage = (event) => {
            const itms = event.data as Record<string, number>;
            workers[name].terminate();

            // replace unknown items with items from ItemConversion, or air if missing
            for (const [key, value] of Object.entries(itms)) {
                let item = Items[key];
                if (!item) {
                    const id = ItemConversion[key];
                    if (!id) {
                        console.error("Item not found", key);
                        delete itms[key];
                        continue;
                    }
                    item = Items[id];
                    if (!item) {
                        console.error("Item not found at all", id);
                        delete itms[key];
                        continue;
                    }
                }
                // if item exists in items, add to it
                if (items[item.id]) {
                    items[item.id] += value;
                } else {
                    items[item.id] = value;
                }
            }

            spinner.style.display = "none";
            if (itms.error) {
                console.error(itms.error);
                workerError = itms.error as any;
            } else {
                ingredients = calculateAllItems(items);
                display();
            }

            delete workers[name];
        };
        workers[name].postMessage({ arrayBuffer });
    }

    function calculateAllItems(toCalculate: Record<string, number>) {
        const rawIngredients: Record<string, number> = {};
        for (const [key, value] of Object.entries(toCalculate)) {
            if (key === "air") continue;
            let item = Items[key];
            if (!item) {
                const id = ItemConversion[key];
                if (!id) {
                    console.error("Item not found", key);
                    continue;
                }
                if (id === "air") continue;
                item = Items[id];
            }
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
        if (item.baseItem) {
            return { [item.id]: quantity };
        }
        if (!item.ingredients || !item.result) {
            return {};
        }

        const recipe = item.ingredients;
        const result: Record<string, number> = {};
        for (const ingredient of recipe) {
            // check if ingredient is a tag
            const ingredientItem = Items[ingredient.id];

            const ingredientQuantity = Math.ceil((quantity / item.result) * ingredient.quantity);
            const ingredientResult = calculateItem(ingredientItem, ingredientQuantity);
            for (const [key, value] of Object.entries(ingredientResult)) {
                if (key in result) {
                    result[key] += value;
                } else {
                    result[key] = value;
                }
            }
            if (Object.keys(ingredientResult).length === 0) {
                console.error("No result for " + ingredient.id + " in " + item.id, item);
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
            let item = Items[key];
            if (!item) {
                const id = ItemConversion[key];
                if (!id) {
                    console.error("Item not found", key);
                    continue;
                }
                if (id === "air") continue;
                item = Items[id];
            }
            displayedItems.push([item, value]);
        }
    }

    function displayIngredients() {
        displayedIngredients = [];
        const toDisplay = sortItems(ingredients);
        for (const [key, value] of Object.entries(toDisplay)) {
            if (key === "air") continue;
            let item = Items[key];
            if (!item) {
                const id = ItemConversion[key];
                if (!id) {
                    console.error("Item not found", key);
                    continue;
                }
                if (id === "air") continue;
                item = Items[id];
            }
            displayedIngredients.push([item, value]);
        }
    }

    function sortItems(itms: Record<string, number>) {
        const sorted: Record<string, number> = {};
        const keys = Object.keys(itms);
        if (sortMethod === "name") {
            keys.sort((a, b) => {
                const itemA = Items[a];
                const itemB = Items[b];
                if (!itemA || !itemB) {
                    console.error("Item not found", a, b);
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
            console.error("No items to export");
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
                console.error("No name", id);
                success = false;
            }
            calculateItem(item, 1);
            if (success) {
                i++;
            }
        }
        console.log("successfully loaded " + i + " items");
    }

    testDataIntegrity(Items);
</script>

<svelte:head>
    <title>Resource Calculator</title>
</svelte:head>

<main in:fade={{ delay: 200, duration: 200, easing: cubicOut }} out:fade={{ duration: 200, easing: cubicOut }}>
    <h1>Resource Calculator</h1>
    <div id="schematic-controls">
        <button on:click={() => sampleDialog.showModal()}>Load Sample</button>
        <dialog id="sample-select" bind:this={sampleDialog}>
            <h2>Select Sample Size</h2>
            <div class="dialog-btns" bind:this={sampleSizeButtons}>
                {#each Object.entries(sampleFiles) as [file, name]}
                    <button on:click={() => loadSampleFile(file)}>{name}</button>
                {/each}
            </div>
            <button on:click={() => sampleDialog.close()}>Close</button>
        </dialog>
        <label
            for="schematic"
            id="schematic-label"
            class={schematicFiles && schematicFiles.length > 0 ? "selected" : ""}
        >
            <input
                type="file"
                name="schematic"
                id="schematic"
                accept=".nbt,.litematic,.schem,.schematic"
                multiple
                bind:this={schematicInput}
                on:change={schematicInputChange}
            />
            <span class="first" id="schem-name" bind:this={schematicFileNameLabel}>Select Schematic</span>
            <span class="second">Browse</span>
            <button id="clear-file" on:click={clearSchematicInput}>X</button>
        </label>
        <div>
            <button on:click={openItemDialog}>Add Items</button>
            <button
                id="clear"
                on:click={() => {
                    clearItems();
                }}>Clear Items</button
            >
        </div>
        <div>
            <button on:click={exportItems}>Export</button>
            <button on:click={importItems}>Import</button>
        </div>
        <div id="sort-container">
            <span>Sort by:</span>
            <select id="sort" bind:value={sortMethod} on:change={() => display()}>
                <option value="name">Name</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    </div>
    <dialog bind:this={itemDialog}>
        <h2>Select Items Manually</h2>
        <div class="dialog-btns">
            <img src={selectedItem ? "textures/" + selectedItem.id + ".png" : ""} alt="" id="item-preview" />
            <input
                type="text"
                id="item-input"
                placeholder="item name or id"
                list="item-data"
                bind:this={itemInput}
                on:input={itemInputChanged}
            />
            <datalist bind:this={itemDataList}>
                {#each Object.entries(Items) as [key, value]}
                    <option value={value.name} data-id={value.id} />
                {/each}
            </datalist>
            <div id="item-amount-container">
                <button id="minus" on:click={decrementItemCount}>-</button>
                <input
                    type="number"
                    id="item-select-amount"
                    placeholder="amount"
                    min="1"
                    pattern="\d*"
                    bind:value={itemAmount}
                />
                <button id="plus" on:click={incrementItemCount}>+</button>
            </div>
            <button on:click={addItems}>Add</button>
            <button on:click={removeItems}>Remove</button>
        </div>
        <button on:click={() => itemDialog.close()}>Close</button>
    </dialog>

    <div id="items" bind:this={itemDisplay}>
        {#if displayedItems.length > 0}
            <div class="separator">Total items: {calculateTotalItemCount(items).toLocaleString()}</div>
        {/if}
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
                    }}>X</button
                >
            </div>
        {/each}
        {#if displayedIngredients.length > 0}
            <div class="separator">Total ingredients: {calculateTotalItemCount(ingredients).toLocaleString()}</div>
        {/if}
        {#each displayedIngredients as ingredient}
            <div class="item">
                <img src="textures/{ingredient[0].id}.png" alt={ingredient[0].name} />
                <div class="item-text">
                    <span>{ingredient[0].name}</span>
                    <span>{ingredient[1].toLocaleString()}x</span>
                </div>
            </div>
        {/each}
    </div>
    <div id="spinner" bind:this={spinner}></div>
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
        backdrop-filter: fade(0.5rem);
        -webkit-backdrop-filter: fade(0.5rem);
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

    button {
        font-family: var(--font-zilla-slab);
        font-size: var(--font-size-medium);
        cursor: pointer;
        color: var(--color-text);
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

    #minus:hover + #item-select-amount {
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
        margin-top: 1rem;
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

    button {
        padding: 0;
        border: var(--border-text);
        border-radius: 0.5rem;
        transition: var(--transition-ease);
        background-color: var(--color-highlight);
        width: 10rem;
        height: 2.6rem;
    }

    button:hover {
        border: var(--border-blue);
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
        padding: 0.5rem;
        justify-content: space-between;
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
        padding: 0.2rem 0.5rem;
        margin-top: 2rem;
        font-size: var(--font-size-large);
        font-family: var(--font-zilla-slab);
    }

    #spinner {
        width: 4rem;
        height: 4rem;
        display: none;
        margin: 0 auto;
    }

    #spinner:after {
        content: " ";
        display: block;
        width: 3.2rem;
        height: 3.2rem;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: spinner 1s linear infinite;
    }

    @keyframes spinner {
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
