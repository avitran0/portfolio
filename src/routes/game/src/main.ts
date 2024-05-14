import { Species } from "./pokemon/species";
import { ClearCanvas, DrawBackground, DrawPokemonSprite, InitRenderingCanvas, ResizeMainCanvas } from "./render";

export function run(canvas: HTMLCanvasElement) {
    canvas.style.imageRendering = "pixelated";
    const ctx = canvas.getContext("2d")!;
    ctx.imageSmoothingEnabled = false;
    window.onresize = () => ResizeMainCanvas(ctx);
    InitRenderingCanvas();
    ResizeMainCanvas(ctx);
    DrawPokemonSprite(0, 0, Species.Bulbasaur);
    DrawBackground(ctx);
    setInterval(() => {
        ClearCanvas();
        DrawPokemonSprite(Math.floor(Math.random() * (240 - 64)), Math.floor(Math.random() * (160 - 64)), Species.Bulbasaur);
        DrawBackground(ctx);
    }, 1000 / 1);
}
