import { Pixel } from "./pixel.js";

/**
 *
 * @param {Pixel[]} data
 * @param {number} width
 * @param {number} height
 * @returns {Pixel[]}
 */
export function scale2x(data, width, height) {
    const scale = 2;

    const outputData = Array.from(width * scale * height * scale);

    /**
     * @param {number} x
     * @param {number} y
     */
    function getPixel(x, y) {
        const pixel = data[y * width + x];
        if (!pixel) {
            return 0;
        }
        return (pixel.a << 24) | (pixel.r << 16) | (pixel.g << 8) | pixel.b;
    }

    let E0, E1, E2, E3;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const B = getPixel(x, y - 1);
            const D = getPixel(x - 1, y);
            const E = getPixel(x, y);
            const F = getPixel(x + 1, y);
            const H = getPixel(x, y + 1);

            if (B !== H && D !== F) {
                E0 = D === B ? D : E;
                E1 = B === F ? F : E;
                E2 = D === H ? D : E;
                E3 = H === F ? F : E;
            } else {
                E0 = E;
                E1 = E;
                E2 = E;
                E3 = E;
            }

            // convert to Pixel
            const E0Pixel = new Pixel((E0 >> 16) & 0xff, (E0 >> 8) & 0xff, E0 & 0xff, (E0 >> 24) & 0xff);
            const E1Pixel = new Pixel((E1 >> 16) & 0xff, (E1 >> 8) & 0xff, E1 & 0xff, (E1 >> 24) & 0xff);
            const E2Pixel = new Pixel((E2 >> 16) & 0xff, (E2 >> 8) & 0xff, E2 & 0xff, (E2 >> 24) & 0xff);
            const E3Pixel = new Pixel((E3 >> 16) & 0xff, (E3 >> 8) & 0xff, E3 & 0xff, (E3 >> 24) & 0xff);

            outputData[y * scale * width * scale + x * scale] = E0Pixel;
            outputData[y * scale * width * scale + x * scale + 1] = E1Pixel;
            outputData[(y * scale + 1) * width * scale + x * scale] = E2Pixel;
            outputData[(y * scale + 1) * width * scale + x * scale + 1] = E3Pixel;
        }
    }
    return outputData;
}

/**
 * @param {Pixel[]} data
 * @param {number} width
 * @param {number} height
 * @returns {Pixel[]}
 */
export function scale2xSFX(data, width, height) {
    const scale = 2;

    const outputData = Array.from(width * scale * height * scale);

    /**
     * @param {number} x
     * @param {number} y
     */
    function getPixel(x, y) {
        const pixel = data[y * width + x];
        if (!pixel) {
            return 0;
        }
        return (pixel.a << 24) | (pixel.r << 16) | (pixel.g << 8) | pixel.b;
    }

    let A, B, C, D, E, F, G, H, I, J, K, L, M;
    let E0, E1, E2, E3;

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            A = getPixel(x - 1, y - 1);
            B = getPixel(x, y - 1);
            C = getPixel(x + 1, y - 1);
            D = getPixel(x - 1, y);
            E = getPixel(x, y);
            F = getPixel(x + 1, y);
            G = getPixel(x - 1, y + 1);
            H = getPixel(x, y + 1);
            I = getPixel(x + 1, y + 1);
            J = getPixel(x, y - 2);
            K = getPixel(x - 2, y);
            L = getPixel(x + 2, y);
            M = getPixel(x, y + 2);

            /*
            E0 = B=D & B!=F & D!=H & (E!=A | E=C | E=G | A=J | A=K) ? 0.5*(B+D) : E
            E1 = B=F & B!=D & F!=H & (E!=C | E=A | E=I | C=J | C=L) ? 0.5*(B+F) : E
            E2 = D=H & B!=D & F!=H & (E!=G | E=A | E=I | G=K | G=M) ? 0.5*(D+H) : E
            E3 = F=H & B!=F & D!=H & (E!=I | E=C | E=G | I=L | I=M) ? 0.5*(F+H) : E
            */

            E0 = B === D && B !== F && D !== H && (E !== A || E === C || E === G || A === J || A === K) ? D : E;
            E1 = B === F && B !== D && F !== H && (E !== C || E === A || E === I || C === J || C === L) ? F : E;
            E2 = D === H && B !== D && F !== H && (E !== G || E === A || E === I || G === K || G === M) ? D : E;
            E3 = F === H && B !== F && D !== H && (E !== I || E === C || E === G || I === L || I === M) ? F : E;

            const E0Pixel = new Pixel((E0 >> 16) & 0xff, (E0 >> 8) & 0xff, E0 & 0xff, (E0 >> 24) & 0xff);
            const E1Pixel = new Pixel((E1 >> 16) & 0xff, (E1 >> 8) & 0xff, E1 & 0xff, (E1 >> 24) & 0xff);
            const E2Pixel = new Pixel((E2 >> 16) & 0xff, (E2 >> 8) & 0xff, E2 & 0xff, (E2 >> 24) & 0xff);
            const E3Pixel = new Pixel((E3 >> 16) & 0xff, (E3 >> 8) & 0xff, E3 & 0xff, (E3 >> 24) & 0xff);

            outputData[y * scale * width * scale + x * scale] = E0Pixel;
            outputData[y * scale * width * scale + x * scale + 1] = E1Pixel;
            outputData[(y * scale + 1) * width * scale + x * scale] = E2Pixel;
            outputData[(y * scale + 1) * width * scale + x * scale + 1] = E3Pixel;
        }
    }
    return outputData;
}
