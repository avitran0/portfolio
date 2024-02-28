import { Pixel } from "./pixel.js";
import { scale2x, scale2xSFX } from "./scalefx.js";
import { scaleSuperXBRT } from "./xbr.js";

/** @type {HTMLInputElement} */
const fileInput = document.getElementById("input");
/** @type {HTMLButtonElement} */
const startButton = document.getElementById("start");
startButton.addEventListener("click", start);

const scale = 4;

/**
 * @param {Pixel[]} pixelData
 * @param {number} width
 * @param {number} height
 * @returns {ImageData}
 */
function convertPixelDataToImageData(pixelData, width, height) {
    const imageData = new ImageData(width, height);
    for (let i = 0; i < pixelData.length; i++) {
        const pixel = pixelData[i];
        imageData.data[i * 4] = pixel.r;
        imageData.data[i * 4 + 1] = pixel.g;
        imageData.data[i * 4 + 2] = pixel.b;
        imageData.data[i * 4 + 3] = pixel.a;
    }
    return imageData;
}

function start() {
    if (fileInput?.files == null) return;
    const file = fileInput.files[0];
    console.log(file);

    // extract image data from file
    const reader = new FileReader();
    reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;
        img.onload = function () {
            const width = img.width;
            const height = img.height;

            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            if (ctx == null) return;
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0);
            const data = ctx.getImageData(0, 0, width, height).data;

            // begin scaling
            const pixelData = [];
            for (let i = 0; i < data.length; i += 4) {
                pixelData.push(new Pixel(data[i], data[i + 1], data[i + 2], data[i + 3]));
            }
            const blockPixelData = scaleBlock(pixelData, width, height, scale);
            const xbrPixelData = scaleSuperXBR(pixelData, width, height, scale);
            const scaleNXPixelData = scaleNX(pixelData, width, height, scale);
            const scaleSFXPixelData = scaleSFX(pixelData, width, height, scale);

            showPreviews([blockPixelData, xbrPixelData, scaleNXPixelData, scaleSFXPixelData], width, height, scale);
        };
    };
    reader.readAsDataURL(file);
}

/**
 * @param {Pixel[][]} pixelData
 * @param {number} width
 * @param {number} height
 * @param {number} scale
 */
function showPreviews(pixelData, width, height, scale) {
    // remove all canvases
    const canvases = document.querySelectorAll("canvas");
    for (const canvas of canvases) {
        canvas.remove();
    }
    for (let i = 0; i < pixelData.length; i++) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        if (ctx == null) return;
        canvas.width = width * scale;
        canvas.height = height * scale;
        ctx.putImageData(convertPixelDataToImageData(pixelData[i], width * scale, height * scale), 0, 0);
        document.body.appendChild(canvas);
    }
}

/**
 * @param {Pixel[]} imageData
 * @param {number} width
 * @param {number} height
 * @param {number} scale
 * @returns {Pixel[]}
 */
function scaleBlock(imageData, width, height, scale) {
    const newImageData = Array.from(width * height * scale * scale);
    // nearest neighbor scaling
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const pixel = imageData[y * width + x];
            for (let i = 0; i < scale; i++) {
                for (let j = 0; j < scale; j++) {
                    newImageData[(y * scale + i) * width * scale + x * scale + j] = pixel;
                }
            }
        }
    }
    return newImageData;
}

/**
 * @param {Pixel[]} imageData
 * @param {number} width
 * @param {number} height
 * @param {number} scale
 * @returns {Pixel[]}
 */
function scaleSuperXBR(imageData, width, height, scale) {
    if (scale === 2) {
        return scaleSuperXBRT(imageData, width, height);
    } else if (scale === 4) {
        return scaleSuperXBRT(scaleSuperXBRT(imageData, width, height), width * 2, height * 2);
    }
}

/**
 * @param {Pixel[]} imageData
 * @param {number} width
 * @param {number} height
 * @param {number} scale
 * @returns {Pixel[]}
 */
function scaleNX(imageData, width, height, scale) {
    if (scale === 2) {
        return scale2x(imageData, width, height);
    } else if (scale === 4) {
        return scale2x(scale2x(imageData, width, height), width * 2, height * 2);
    }
}

/**
 * @param {Pixel[]} imageData
 * @param {number} width
 * @param {number} height
 * @param {number} scale
 * @returns {Pixel[]}
 */
function scaleSFX(imageData, width, height, scale) {
    if (scale === 2) {
        return scale2xSFX(imageData, width, height);
    } else if (scale === 4) {
        return scale2xSFX(scale2xSFX(imageData, width, height), width * 2, height * 2);
    }
}
