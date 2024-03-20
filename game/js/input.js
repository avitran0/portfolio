import { Globals } from "./globals.js";
import { Vec2 } from "./math.js";

export class Camera {
    constructor() {
        this.position = new Vec2(0, 0);
        this.zoom = 1;
        this.hoveredTile = new Vec2(0, 0);
    }
}

const MouseButtons = {
    Left: 0,
    Middle: 1,
    Right: 2,
};

export function setupInput(camera) {
    window.onwheel = (e) => {
        camera.zoom += e.deltaY * -0.001;
        // check bounds
        if (camera.zoom < 0.5) camera.zoom = 0.5;
        if (camera.zoom > 10) camera.zoom = 10;
    };

    window.onmousedown = (e) => {
        if (e.button === MouseButtons.Right) {
            window.onmousemove = (e) => {
                camera.position.x += e.movementX / camera.zoom / 20;
                camera.position.y += e.movementY / camera.zoom / 20;
            };
        }
    };

    window.onmouseup = () => {
        window.onmousemove = (e) => {
            // todo: fix
            camera.hoveredTile.x = Math.floor(
                (e.clientX / Globals.PixelRatio -
                    (Globals.Canvas.width / 2 - Globals.BgCanvas.width / 2 - (Globals.BgCanvas.width / 2) * (camera.zoom - 1))) /
                    (Globals.PixelSize * camera.zoom)
            );
            camera.hoveredTile.y = Math.floor(
                (e.clientY / Globals.PixelRatio -
                    (Globals.Canvas.height / 2 - Globals.BgCanvas.height / 2 - (Globals.BgCanvas.height / 2) * (camera.zoom - 1))) /
                    (Globals.PixelSize * camera.zoom)
            );
            console.log(camera.hoveredTile);
        };
    };
}
