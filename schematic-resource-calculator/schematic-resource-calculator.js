import { ItemConversion, Items } from "./recipes.js";

const schematicInput = document.getElementById("schematic");
const schematicNameLabel = document.getElementById("schem-name");
const itemSelect = document.getElementById("item-input");
const itemSelectAmount = document.getElementById("item-select-amount");
const itemSelectAdd = document.getElementById("item-select-add");
const itemSelectRemove = document.getElementById("item-select-remove");
// todo: display items and recipe tree?
const itemsDiv = document.getElementById("items");
const sample = document.getElementById("sample");
const spinner = document.getElementById("spinner");

const start = document.getElementById("start");

const clearItems = document.getElementById("clear");
const fileClear = document.getElementById("clear-file");

// get first item's id
let selectedId = Object.keys(Items)[0];

let items = {};
let ingredients = {};

schematicInput.onchange = (event) => {
    if (schematicInput.files.length > 0) {
        schematicNameLabel.textContent = schematicInput.files[0].name;
    } else {
        schematicNameLabel.textContent = "Select Schematic";
    }
};

itemSelectAdd.addEventListener("click", (event) => {
    const amount = parseInt(itemSelectAmount.value);
    if (isNaN(amount)) {
        console.error("Invalid amount");
        return;
    }
    const item = Items[selectedId];
    if (!item) {
        console.error("Item not found", selectedId);
        return;
    }
    if (items[selectedId]) {
        items[selectedId] += amount;
    } else {
        items[selectedId] = amount;
    }
    ingredients = calculateAllItems(items);
    display(items, ingredients);
});

itemSelectRemove.addEventListener("click", (event) => {
    const amount = parseInt(itemSelectAmount.value);
    if (isNaN(amount)) {
        console.error("Invalid amount");
        return;
    }
    const item = Items[selectedId];
    if (!item) {
        console.error("Item not found", selectedId);
        return;
    }
    if (items[selectedId]) {
        items[selectedId] -= amount;
        if (items[selectedId] <= 0) {
            delete items[selectedId];
        }
    }
    ingredients = calculateAllItems(items);
    display(items, ingredients);
});

start.onclick = async (event) => {
    // check schematicInput for file
    if (schematicInput.files.length > 0) {
        const file = schematicInput.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const arrayBuffer = event.target.result;
            const extension = file.name.split(".").pop();
            startWorker(arrayBuffer, extension);
        };
        reader.readAsArrayBuffer(file);
    } else {
        // load selected sample
        const fileName = sample.value;
        const file = await fetch("/assets/schematics/" + fileName);
        const arrayBuffer = await file.arrayBuffer();
        const extension = fileName.split(".").pop();
        startWorker(arrayBuffer, extension);
    }
};

clearItems.onclick = (event) => {
    items = {};
    ingredients = {};
    clearDisplayedItems();
};

fileClear.onclick = (event) => {
    schematicInput.value = "";
    schematicNameLabel.textContent = "Select Schematic";
};

for (const [key, value] of Object.entries(Items)) {
    const button = document.createElement("button");
    button.value = key;
    const image = getLazyImage(key);
    button.appendChild(image);
    // add text after image
    const text = document.createElement("span");
    text.textContent = value.name ? value.name : key;
    button.appendChild(text);
    itemSelect.appendChild(button);

    /*const image = document.createElement("img");
    image.src = "/assets/textures/" + key + ".png";
    imageDiv.appendChild(image);*/
}

// create intersection observer to load images in itemSelect
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            observer.unobserve(image);
        }
    });
});
for (const button of itemSelect.children) {
    const image = button.querySelector("img");
    observer.observe(image);
}

for (let i = 0; i < itemSelect.children.length; i++) {
    const button = itemSelect.children[i];
    button.addEventListener("click", (event) => {
        selectedId = button.value;
        // remove classes from all other buttons
        for (const button of itemSelect.children) {
            button.classList.remove("selected");
        }
        // add class to selected button
        button.classList.add("selected");
    });
    if (i === 0) {
        button.classList.add("selected");
    }
}

/**
 * @param {ArrayBuffer} arrayBuffer
 * @param {string} extension
 */
function startWorker(arrayBuffer, extension) {
    const worker = new Worker("schematic-webworker.js", { type: "module" });
    //items = loadSchematic(arrayBuffer, extension);
    worker.postMessage({ arrayBuffer, extension });
    spinner.style.display = "block";
    clearDisplayedItems();
    worker.onmessage = (event) => {
        items = event.data;

        if (items.error) {
            console.error(items.error);
            clearDisplayedItems();
            displaySeparator("Could not load schematic.");
        } else {
            const metadata = items.__metadata;
            delete items.__metadata;
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

        worker.terminate();
        spinner.style.display = "none";
    };
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
function calculateTotalItems(data) {
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
    displaySeparator("Total items: " + calculateTotalItems(items).toLocaleString());
    displayItems(items, true);
    displaySeparator("Total ingredients: " + calculateTotalItems(ingredients).toLocaleString());
    displayItems(ingredients);
}

function clearDisplayedItems() {
    itemsDiv.innerHTML = "";
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
            itemsDiv.appendChild(itemDiv);
        } else {
            const itemDiv = createItemDiv(item, value);
            itemsDiv.appendChild(itemDiv);
        }
    }
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

function displaySeparator(text) {
    const separator = document.createElement("div");
    separator.className = "separator";
    separator.textContent = text;
    itemsDiv.appendChild(separator);
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

calculateItem(Items["black_terracotta"], 1);
testDataIntegrity(Items);