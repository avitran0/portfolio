import { Camera } from "./input.js";

export const Globals = {
    PixelSize: 16,
    PixelRatio: window.devicePixelRatio,
    ShowFPS: true,

    /** @type {HTMLCanvasElement} */
    Canvas: document.getElementById("canvas"),
    /** @type {CanvasRenderingContext2D} */
    Ctx: undefined,
    /** @type {HTMLCanvasElement} */
    BgCanvas: document.createElement("canvas"),
    /** @type {CanvasRenderingContext2D} */
    BgCtx: undefined,

    Camera: new Camera(),
};

Globals.Ctx = Globals.Canvas.getContext("2d");
Globals.BgCtx = Globals.BgCanvas.getContext("2d");
