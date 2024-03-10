import { Items, Tags } from "./recipes.js";
import { loadSchematic } from "./schematic.js";

console.log(Items);
console.log(Tags);

const schematicInput = document.getElementById("schematic");
const datalist = document.getElementById("item-list");
const itemsDiv = document.getElementById("items");

let items = {};

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
        displayItems();
        calculateAllItems();
    };
    reader.readAsArrayBuffer(file);
});

function calculateAllItems() {
    const rawIngredients = {};
    for (const [key, value] of Object.entries(items)) {
        const result = calculateItem(Items[key], value);
        for (const [key, value] of Object.entries(result)) {
            if (key in rawIngredients) {
                rawIngredients[key] += value;
            } else {
                rawIngredients[key] = value;
            }
        }
    }
    console.log(rawIngredients);
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
    }
    if (Object.keys(result).length === 0) {
        console.error("No result for " + item.id, item);
    }
    return result;
}

function displayItems() {
    const ordered = Object.keys(items).sort().reduce(
        (obj, key) => {
          obj[key] = items[key];
          return obj;
        },
        {}
      );
    const itemsDiv = document.getElementById("items");
    itemsDiv.innerHTML = "";
    for (const [key, value] of Object.entries(ordered)) {
        if (key === "air") continue;
        const itemDiv = document.createElement("div");
        itemDiv.textContent = key + ": " + value;
        itemsDiv.appendChild(itemDiv);
    }
}

function testDataIntegrity(blocks) {
    for (const [id, item] of Object.entries(blocks)) {
        if (id !== item.id) {
            console.error("ID mismatch", id, item.id);
        }
        if (!item.name) {
            console.error("No name", id);
        }
    }
}

testDataIntegrity(Items);
