import { Species } from "./pokemon/species";
import { GSpeciesInfo } from "./pokemon/species_info";

let bg_canvas: HTMLCanvasElement;
let bg_ctx: CanvasRenderingContext2D;
const cached_images: { [key: string]: HTMLImageElement } = {};

export function InitRenderingCanvas() {
    bg_canvas = document.createElement("canvas");
    bg_canvas.style.imageRendering = "pixelated";
    bg_canvas.width = 240;
    bg_canvas.height = 160;
    bg_ctx = bg_canvas.getContext("2d")!;
    bg_ctx.imageSmoothingEnabled = false;
}

export function ClearCanvas() {
    bg_ctx.clearRect(0, 0, bg_canvas.width, bg_canvas.height);
}

export function DrawTile(x: number, y: number, color: string) {
    bg_ctx.fillStyle = color;
    bg_ctx.fillRect(x * 10, y * 10, 10, 10);
}

export function DrawPokemonSprite(x: number, y: number, pokemon: Species) {
    const image_name = GSpeciesInfo[pokemon].sprite;
    if (cached_images[image_name]) {
        bg_ctx.drawImage(cached_images[image_name], x, y);
        return;
    } else {
        const img = new Image();
        img.src = `/game/sprites/pokemon/${image_name}/front.png`;
        img.onload = () => {
            bg_ctx.drawImage(img, x, y);
        };
        cached_images[image_name] = img;
    }
}

export function DrawBackground(ctx: CanvasRenderingContext2D) {
    // draw background canvas onto given ctx, with letterboxing if necessary
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const scale = Math.min(ctx.canvas.width / bg_canvas.width, ctx.canvas.height / bg_canvas.height);
    const width = bg_canvas.width * scale;
    const height = bg_canvas.height * scale;
    const x = (ctx.canvas.width - width) / 2;
    const y = (ctx.canvas.height - height) / 2;
    ctx.drawImage(bg_canvas, x, y, width, height);
}

export function ResizeMainCanvas(ctx: CanvasRenderingContext2D) {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    DrawBackground(ctx);
}
