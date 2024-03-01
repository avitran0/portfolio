class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Pattern {
    /**
     * @param {ImageData} data
     */
    constructor(data) {
        /** @type {ImageData} */
        this.imageData = data
        this.tiles = [];
    }
}

class Wave {
    constructor(image) {
        /** @type {Pattern[]} */
        this.patterns = [];
        this.image = image;
    }
}

/**
 * @param {ImageData} image
 * @param {number} n pattern size
 * @param {number} width output
 * @param {number} height output
 */
function wfc(image, n, width, height) {
}

function getPatterns(image, n) {
    const patterns = [];
    for (let x = 0; x < image.width - n; x++) {
        for (let y = 0; y < image.height - n; y++) {
            const pattern = new Pattern(getPattern(image, x, y, n));
            patterns.push(pattern);
        }
    }
    return patterns;
}

function getPattern(image, x, y, n) {
    const data = new ImageData(n, n);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const index = (x + i + (y + j) * image.width) * 4;
            data.data[i * n + j] = image.data[index];
            data.data[i * n + j + 1] = image.data[index + 1];
            data.data[i * n + j + 2] = image.data[index + 2];
            data.data[i * n + j + 3] = image.data[index + 3];
        }
    }
    return data;
}

/**
 * @param {Tile[][]} grid
 * @returns {Position}
 */
function getLeastEntropyPosition(grid) {
    let leastEntropy = Infinity;
    let leastEntropyCoordinates = new Position(0, 0);
    for (const row of grid) {
        for (const tile of row) {
            if (tile.validTiles.length < leastEntropy) {
                leastEntropy = tile.validTiles.length;
                leastEntropyCoordinates = tile.position;
            }
        }
    }
    return leastEntropyCoordinates;
}

/**
 * @returns {Tile[][]}
 */
function debugGenRandomTiles() {
    const tiles = [];
    for (let x = 0; x < 10; x++) {
        const tempTiles = [];
        for (let y = 0; y < 10; y++) {
            const tile = new Tile(x * 10 + y, new Position(x, y));
            // random amount of numbers as valid tiles
            const validTiles = [];
            for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
                validTiles.push(Math.floor(Math.random() * 100));
            }
            tile.validTiles = validTiles;
            tempTiles.push(tile);
        }
        tiles.push(tempTiles);
    }
    return tiles;
}

/**
 *
 * @param {string} src
 * @returns  {Promise<ImageData>}
 */
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0);
            resolve(ctx.getImageData(0, 0, image.width, image.height));
        }
        image.src = src;
    });
}

async function startWFC() {
    const image = await loadImage("example.png");
    wfc(image, 3, 10, 10);
}

startWFC();
