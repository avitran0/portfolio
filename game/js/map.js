import { Globals } from "./globals.js";
import { Vec2 } from "./math.js";

// (0, 0) is top left corner
export class Map {
    /**
     * @param {Vec2} size
     * @param {CanvasRenderingContext2D} ctx
     */
    constructor(size, ctx) {
        this.size = size;
        this.tiles = new Array(size.x * size.y);
        this.ctx = ctx;
    }

    /**
     * @param {Vec2} pos
     */
    getTile(pos) {
        return this.tiles[pos.y * this.size.x + pos.x];
    }

    /**
     * @param {Vec2} pos
     * @param {Tile} tile
     */
    setTile(pos, tile) {
        this.tiles[pos.y * this.size.x + pos.x] = tile;
    }

    draw() {
        for (let y = 0; y < this.size.y; y++) {
            for (let x = 0; x < this.size.x; x++) {
                const tile = this.getTile(new Vec2(x, y));
                if (!tile) continue;
                this.ctx.drawImage(
                    tile.sprite,
                    x * Globals.PixelSize,
                    y * Globals.PixelSize,
                    Globals.PixelSize,
                    Globals.PixelSize
                );
            }
        }
    }
}
