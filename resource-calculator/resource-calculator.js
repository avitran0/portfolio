import { Blocks, Tags } from "./recipes.js";

console.log(Blocks);
console.log(Tags);

const select = document.getElementById("items");
const imageDiv = document.getElementById("images");

for (const [key, value] of Object.entries(Blocks)) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = value.name ? value.name : key;
    select.appendChild(option);

    const image = document.createElement("img");
    image.src = "/assets/textures/" + key + ".png";
    imageDiv.appendChild(image);
}
