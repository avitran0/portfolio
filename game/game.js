/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const colors = Object.freeze({
    base: "#1e1e28",
    mantle: "#2c2c3b",
    crust: "#3a3a4c",
    surface: "#47475e",
    overlay: "#555570",
    subtext: "#d8d8d8",
    text: "#ffffff",
    red: "#f06464",
    orange: "#f08c5a",
    yellow: "#f0c878",
    green: "#a0f082",
    teal: "#50c8c8",
    blue: "#6496f0",
    purple: "#b478f0",
});

function start() {
    if (ctx === null) return;
}

function gameLoop() {
    
}

start();
