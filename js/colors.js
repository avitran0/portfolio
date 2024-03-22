// get :root element
const root = document.querySelector(":root");
// get all css variables containing color
const colorNames = [
    "--color-crust-dark",
    "--color-mantle-dark",
    "--color-base",
    "--color-mantle",
    "--color-crust",
    "--color-surface",
    "--color-overlay",
    "--color-subtext",
    "--color-text",
    "--color-red",
    "--color-orange",
    "--color-yellow",
    "--color-green",
    "--color-teal",
    "--color-blue",
    "--color-purple",
];
const colorVars = [];
colorNames.forEach((colorName) => {
    colorVars.push(getComputedStyle(root).getPropertyValue(colorName));
});
// create color scheme element
const colorScheme = document.getElementById("color-scheme");
// add color scheme to color scheme element
for (let i = 0; i < colorNames.length; i++) {
    const colorElement = document.createElement("div");
    const displayElement = document.createElement("div");
    const textElement = document.createElement("div");
    colorElement.classList.add("color");
    colorElement.title = colorNames[i].replace("--color-", "") + ": " + colorVars[i];
    displayElement.style.backgroundColor = colorVars[i];
    textElement.textContent = `${colorNames[i].replace("--color-", "")}\n${colorVars[i]}`;
    colorElement.appendChild(displayElement);
    colorElement.appendChild(textElement);
    colorScheme.appendChild(colorElement);
}