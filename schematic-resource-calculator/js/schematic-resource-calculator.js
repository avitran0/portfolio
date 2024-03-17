import { ItemConversion, Items } from "./recipes.js";

const elements = {
    schematicInput: document.getElementById("schematic"),
    schematicNameLabel: document.getElementById("schem-name"),
    itemSelectToggle: document.getElementById("item-select-toggle"),
    itemControls: document.getElementById("item-controls"),
    itemPreview: document.getElementById("item-preview"),
    itemInput: document.getElementById("item-input"),
    itemData: document.getElementById("item-data"),
    itemSelectAmount: document.getElementById("item-select-amount"),
    itemSelectAdd: document.getElementById("item-select-add"),
    itemSelectRemove: document.getElementById("item-select-remove"),
    itemSelectPlus: document.getElementById("plus"),
    itemSelectMinus: document.getElementById("minus"),
    // todo: display items and recipe tree?
    itemsDiv: document.getElementById("items"),
    sample: document.getElementById("sample"),
    /** @type {HTMLDialogElement} */
    sampleSelect: document.getElementById("sample-select"),
    spinner: document.getElementById("spinner"),

    start: document.getElementById("start"),

    clearItems: document.getElementById("clear"),
    fileClear: document.getElementById("clear-file"),
};

// get first item's id
let selectedItem = undefined;

let items = {};
let ingredients = {};

let worker = undefined;

function setupElementListeners() {
    elements.itemSelectToggle.onclick = (event) => {
        elements.itemInput.value = "";
        elements.itemSelectAmount.value = "";
        elements.itemPreview.src = "";
        elements.itemControls.showModal();
    };

    elements.itemSelectPlus.onclick = (event) => {
        const amount = parseInt(elements.itemSelectAmount.value);
        if (isNaN(amount)) {
            elements.itemSelectAmount.value = "1";
        } else {
            elements.itemSelectAmount.value = (amount + 1).toString();
        }
    };

    elements.itemSelectMinus.onclick = (event) => {
        const amount = parseInt(elements.itemSelectAmount.value);
        if (isNaN(amount)) {
            elements.itemSelectAmount.value = "1";
        } else {
            if (amount <= 1) return;
            elements.itemSelectAmount.value = (amount - 1).toString();
        }
    };

    elements.schematicInput.onchange = (event) => {
        if (elements.schematicInput.files.length > 0) {
            elements.schematicNameLabel.textContent = elements.schematicInput.files[0].name;
            elements.schematicNameLabel.parentElement.classList.add("selected");
        } else {
            elements.schematicNameLabel.textContent = "Select Schematic";
            elements.schematicNameLabel.parentElement.classList.remove("selected");
        }
    };

    elements.itemSelectAdd.addEventListener("click", (event) => {
        const amount = parseInt(elements.itemSelectAmount.value);
        if (isNaN(amount)) {
            console.error("Invalid amount");
            return;
        }
        if (!selectedItem) {
            return;
        }
        if (items[selectedItem.id]) {
            items[selectedItem.id] += amount;
        } else {
            items[selectedItem.id] = amount;
        }
        ingredients = calculateAllItems(items);
        display(items, ingredients);
    });

    elements.itemSelectRemove.addEventListener("click", (event) => {
        const amount = parseInt(elements.itemSelectAmount.value);
        if (isNaN(amount)) {
            console.error("Invalid amount");
            return;
        }
        if (!selectedItem) {
            return;
        }
        if (items[selectedItem.id]) {
            items[selectedItem.id] -= amount;
            if (items[selectedItem.id] <= 0) {
                delete items[selectedItem.id];
            }
        }
        ingredients = calculateAllItems(items);
        display(items, ingredients);
    });

    elements.itemInput.oninput = (event) => {
        const selected = event.target.value.toLowerCase();
        const item = Object.values(Items).find((item) => item.id === selected || item.name.toLowerCase() === selected);
        if (item) {
            elements.itemPreview.src = "/assets/textures/" + item.id + ".png";
            selectedItem = item;
        } else {
            elements.itemPreview.src = "";
            selectedItem = undefined;
        }
    };

    elements.start.onclick = async (event) => {
        // check schematicInput for file
        if (elements.schematicInput.files.length <= 0) return;

        const file = elements.schematicInput.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const arrayBuffer = event.target.result;
            startWorker(arrayBuffer);
        };
        reader.readAsArrayBuffer(file);
    };

    elements.clearItems.onclick = (event) => {
        items = {};
        ingredients = {};
        clearDisplayedItems();
    };

    elements.fileClear.onclick = (event) => {
        elements.schematicInput.value = "";
        elements.schematicNameLabel.textContent = "Select Schematic";
        elements.schematicNameLabel.parentElement.classList.remove("selected");
    };

    elements.sample.onclick = (event) => {
        elements.sampleSelect.showModal();
    };

    for (const button of elements.sampleSelect.querySelectorAll("button")) {
        if (button.classList.contains("esc")) continue;

        button.addEventListener("click", async (event) => {
            elements.sampleSelect.close();
            const fileName = button.value;
            const file = await fetch("/assets/schematics/" + fileName);
            const arrayBuffer = await file.arrayBuffer();
            startWorker(arrayBuffer);
        });
    }

    for (const esc of document.querySelectorAll(".esc")) {
        esc.onclick = (event) => {
            event.target.parentElement.close();
        };
    }
}

function populateItemSelect() {
    for (const [key, value] of Object.entries(Items)) {
        const option = document.createElement("option");
        option.value = value.name;
        option.dataset.id = value.id;
        elements.itemData.appendChild(option);

        /*const image = document.createElement("img");
        image.src = "/assets/textures/" + key + ".png";
        imageDiv.appendChild(image);*/
    }
}

/**
 * @param {ArrayBuffer} arrayBuffer
 */
function startWorker(arrayBuffer) {
    elements.spinner.style.display = "block";
    clearDisplayedItems();
    worker = new Worker("js/schematic-webworker.js", { type: "module" });
    //items = loadSchematic(arrayBuffer);
    worker.onmessage = (event) => {
        items = event.data;
        worker.terminate();

        elements.spinner.style.display = "none";
        if (items.error) {
            console.error(items.error);
            displaySeparator("Could not load schematic.");
        } else {
            const metadata = items.__metadata;
            delete items.__metadata;
            clearDisplayedItems();
            ingredients = calculateAllItems(items);
            display(items, ingredients);
            displaySeparator(
                "Processed " +
                    metadata.blockCount.toLocaleString() +
                    " blocks in " +
                    metadata.time.toLocaleString() +
                    "ms (" +
                    metadata.blockThroughput.toLocaleString() +
                    " blocks/s)"
            );
        }

        worker = undefined;
    };
    worker.postMessage({ arrayBuffer });
}

/**
 * @returns {Object.<string, number>} rawIngredients
 */
function calculateAllItems(toCalculate) {
    const rawIngredients = {};
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

function calculateItem(item, quantity) {
    if (!item) {
        return {};
    }
    if (item.baseItem) {
        return { [item.id]: quantity };
    }

    const recipe = item.ingredients;
    const result = {};
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

/**
 * @param {Object.<string, number>} data
 * @returns {number}
 */
function calculateTotalItemCount(data) {
    // don't count air
    let total = 0;
    for (const [key, value] of Object.entries(data)) {
        if (key === "air") continue;
        total += value;
    }
    return total;
}

function display(items, ingredients) {
    clearDisplayedItems();
    displaySeparator("Total items: " + calculateTotalItemCount(items).toLocaleString());
    displayItems(items, true);
    displaySeparator("Total ingredients: " + calculateTotalItemCount(ingredients).toLocaleString());
    displayItems(ingredients);
}

function clearDisplayedItems() {
    elements.itemsDiv.innerHTML = "";
}

function displayItems(toDisplay, deletable = false) {
    toDisplay = sortObject(toDisplay);
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
        if (deletable) {
            const itemDiv = createDeletableItemDiv(item, value);
            elements.itemsDiv.appendChild(itemDiv);
        } else {
            const itemDiv = createItemDiv(item, value);
            elements.itemsDiv.appendChild(itemDiv);
        }
    }
}

function displaySeparator(text) {
    const separator = document.createElement("div");
    separator.className = "separator";
    separator.textContent = text;
    elements.itemsDiv.appendChild(separator);
}

function createItemDiv(item, count) {
    const name = item.name;
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    const image = getImage(item.id);
    image.title = name;
    itemDiv.appendChild(image);
    const textDiv = document.createElement("div");
    textDiv.className = "item-text";
    const text1 = document.createElement("span");
    text1.textContent = name;
    const text2 = document.createElement("span");
    text2.textContent = count.toLocaleString() + "x";
    textDiv.appendChild(text1);
    textDiv.appendChild(text2);
    itemDiv.appendChild(textDiv);
    return itemDiv;
}

function createDeletableItemDiv(item, count) {
    const itemDiv = createItemDiv(item, count);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.onclick = (event) => {
        delete items[item.id];
        ingredients = calculateAllItems(items);
        display(items, ingredients);
    };
    itemDiv.appendChild(deleteButton);
    return itemDiv;
}

/**
 * @param {string} id
 * @returns {HTMLImageElement}
 */
function getImage(id) {
    const image = document.createElement("img");
    image.src = "/assets/textures/" + id + ".png";
    image.loading = "lazy";
    return image;
}

/**
 * @param {string} id
 * @returns {HTMLImageElement}
 */
function getLazyImage(id) {
    const image = document.createElement("img");
    image.dataset.src = "/assets/textures/" + id + ".png";
    image.loading = "lazy";
    return image;
}

function sortObject(obj) {
    return Object.keys(obj)
        .sort()
        .reduce((result, key) => {
            result[key] = obj[key];
            return result;
        }, {});
}

function testDataIntegrity(items) {
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

function init() {
    setupElementListeners();
    populateItemSelect();
}

init();
testDataIntegrity(Items);
