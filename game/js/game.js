import { loadSprite } from "./assets.js";
import { Globals } from "./globals.js";
import { setupInput } from "./input.js";
import { Map } from "./map.js";
import { Vec2 } from "./math.js";
import { Tile } from "./world/tile.js";

setupInput(Globals.Camera);

window.onresize = () => {
    Globals.Canvas.width = window.innerWidth * Globals.PixelRatio;
    Globals.Canvas.height = window.innerHeight * Globals.PixelRatio;
};

// disable right click menu
document.oncontextmenu = () => false;

async function main() {
    window.onresize();
    // Set the canvas size
    Globals.BgCanvas.width = 64 * Globals.PixelSize;
    Globals.BgCanvas.height = 64 * Globals.PixelSize;
    const map = new Map(new Vec2(64, 64), Globals.BgCtx);

    const sprite = await loadSprite("textures/tile.png");
    for (let y = 0; y < map.size.y; y++) {
        for (let x = 0; x < map.size.x; x++) {
            map.setTile(new Vec2(x, y), new Tile(sprite));
        }
    }

    map.draw();

    requestAnimationFrame(render);
}

function render() {
    requestAnimationFrame(render);
    Globals.Ctx.clearRect(0, 0, Globals.Canvas.width, Globals.Canvas.height);

    // centers map and also centers zoom on screen center
    const pos = new Vec2(
        Globals.Camera.position.x * Globals.PixelSize * Globals.Camera.zoom +
            Globals.Canvas.width / 2 -
            Globals.BgCanvas.width / 2 -
            (Globals.BgCanvas.width / 2) * (Globals.Camera.zoom - 1),
        Globals.Camera.position.y * Globals.PixelSize * Globals.Camera.zoom +
            Globals.Canvas.height / 2 -
            Globals.BgCanvas.height / 2 -
            (Globals.BgCanvas.height / 2) * (Globals.Camera.zoom - 1)
    );
    Globals.Ctx.drawImage(
        Globals.BgCanvas,
        pos.x,
        pos.y,
        Globals.BgCanvas.width * Globals.Camera.zoom,
        Globals.BgCanvas.height * Globals.Camera.zoom
    );

    // draw centered dot for reference
    Globals.Ctx.fillStyle = "red";
    Globals.Ctx.fillRect(Globals.Canvas.width / 2 - 2, Globals.Canvas.height / 2 - 2, 4, 4);
}

main();
