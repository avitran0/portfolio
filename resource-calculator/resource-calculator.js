import { ItemConversion, Items, Tags } from "./recipes.js";
import { loadSchematic } from "./schematic.js";

const schematicInput = document.getElementById("schematic");
const datalist = document.getElementById("item-list");
// todo: display items and recipe tree?
const itemsDiv = document.getElementById("items");

let items = {};
let ingredients = {};

for (const [key, value] of Object.entries(Items)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = value.name ? value.name : key;
    datalist.appendChild(option);

    /*const image = document.createElement("img");
    image.src = "/assets/textures/" + key + ".png";
    imageDiv.appendChild(image);*/
}

schematicInput.addEventListener("input", (event) => {
    // read file to array buffer
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
        const arrayBuffer = event.target.result;
        const extension = file.name.split(".").pop();
        items = loadSchematic(arrayBuffer, extension);
        ingredients = calculateAllItems(items);
        clearDisplayedItems();
        displaySeparator("Total items: " + calculateTotalItems(items).toLocaleString());
        displayItems(items);
        displaySeparator("Total ingredients: " + calculateTotalItems(ingredients).toLocaleString());
        displayItems(ingredients);
    };
    reader.readAsArrayBuffer(file);
});

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
            console.error("No result for " + item.id, item);
        }
    }
    return result;
}

/**
 * @param {Object.<string, number>} data
 * @returns {number}
 */
function calculateTotalItems(data) {
    return Object.values(data).reduce((a, b) => a + b, 0);
}

function clearDisplayedItems() {
    itemsDiv.innerHTML = "";
}

function displayItems(toDisplay) {
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
        const name = item.name;
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
        const image = document.createElement("img");
        image.src = "/assets/textures/" + item.id + ".png";
        //image.alt = name;
        image.title = name;
        itemDiv.appendChild(image);
        const textDiv = document.createElement("div");
        textDiv.className = "item-text";
        const text1 = document.createElement("span");
        text1.textContent = name;
        const text2 = document.createElement("span");
        text2.textContent = value.toLocaleString() + "x";
        textDiv.appendChild(text1);
        textDiv.appendChild(text2);
        itemDiv.appendChild(textDiv);
        itemsDiv.appendChild(itemDiv);
    }
}

function displaySeparator(text) {
    const separator = document.createElement("div");
    separator.className = "separator";
    separator.textContent = text;
    itemsDiv.appendChild(separator);
}

function testDataIntegrity(items) {
    for (const [id, item] of Object.entries(items)) {
        if (id !== item.id) {
            console.error("ID mismatch", id, item.id);
        }
        if (!item.name) {
            console.error("No name", id);
        }
        calculateItem(item, 1);
    }
}

calculateItem(Items["black_terracotta"], 1);
testDataIntegrity(Items);
