import { Pixel } from "./pixel.js";

const config = {
    lumaWeight: 1,
    centerDirectionBias: 0.5,
    dominantDirectionThreshold: 0.3,
    equalColorThreshold: 0.3,
    steepDirectionThreshold: 0.3,
};

const Rotation = Object.freeze({
    ROT_0: 0,
    ROT_90: 1,
    ROT_180: 2,
    ROT_270: 3,
});

const BlendType = Object.freeze({
    BLEND_NONE: 0,
    BLEND_NORMAL: 1,
    BLEND_DOMINANT: 2,
});

class BlendResult {
    constructor() {
        this.blend_f = BlendType.BLEND_NONE;
        this.blend_g = BlendType.BLEND_NONE;
        this.blend_j = BlendType.BLEND_NONE;
        this.blend_k = BlendType.BLEND_NONE;
    }

    getTopLeft() {
        return this.blend_f;
    }

    getTopRight() {
        return this.blend_g;
    }

    getBottomLeft() {
        return this.blend_j;
    }

    getBottomRight() {
        return this.blend_k;
    }
}

class Kernel3 {
    /**
     * @param {Pixel} a
     * @param {Pixel} b
     * @param {Pixel} c
     * @param {Pixel} d
     * @param {Pixel} e
     * @param {Pixel} f
     * @param {Pixel} g
     * @param {Pixel} h
     * @param {Pixel} i
     */
    constructor(a, b, c, d, e, f, g, h, i) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
        this.g = g;
        this.h = h;
        this.i = i;
    }

    /**
     * @param {Pixel[]} data
     * @param {number} width
     * @param {number} x
     * @param {number} y
     * @returns {Kernel3}
     */
    static getAtPosition(data, width, x, y) {
        // create new kernel for given position, e is the center
        return new Kernel3(
            data[(y - 1) * width + x - 1],
            data[(y - 1) * width + x],
            data[(y - 1) * width + x + 1],
            data[y * width + x - 1],
            data[y * width + x],
            data[y * width + x + 1],
            data[(y + 1) * width + x - 1],
            data[(y + 1) * width + x],
            data[(y + 1) * width + x + 1]
        );
    }
}

class Kernel4 {
    /**
     * @param {Pixel} a
     * @param {Pixel} b
     * @param {Pixel} c
     * @param {Pixel} d
     * @param {Pixel} e
     * @param {Pixel} f
     * @param {Pixel} g
     * @param {Pixel} h
     * @param {Pixel} i
     * @param {Pixel} j
     * @param {Pixel} k
     * @param {Pixel} l
     * @param {Pixel} m
     * @param {Pixel} n
     * @param {Pixel} o
     * @param {Pixel} p
     */
    constructor(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
        this.g = g;
        this.h = h;
        this.i = i;
        this.j = j;
        this.k = k;
        this.l = l;
        this.m = m;
        this.n = n;
        this.o = o;
        this.p = p;
    }

    /**
     * @param {Pixel[]} data
     * @param {number} width
     * @param {number} x
     * @param {number} y
     * @returns {Kernel4}
     */
    static getAtPosition(data, width, x, y) {
        // create new kernel for given position, f is the center
        return new Kernel4(
            data[(y - 1) * width + x - 1],
            data[(y - 1) * width + x],
            data[(y - 1) * width + x + 1],
            data[(y - 1) * width + x + 2],
            data[y * width + x - 1],
            data[y * width + x],
            data[y * width + x + 1],
            data[y * width + x + 2],
            data[(y + 1) * width + x - 1],
            data[(y + 1) * width + x],
            data[(y + 1) * width + x + 1],
            data[(y + 1) * width + x + 2],
            data[(y + 2) * width + x - 1],
            data[(y + 2) * width + x],
            data[(y + 2) * width + x + 1],
            data[(y + 2) * width + x + 2]
        );
    }
}

/**
 * @param {Pixel} front
 * @param {Pixel} back
 * @returns {Pixel}
 */
function gradientRGB(front, back) {}

/**
 * @param {Pixel} front
 * @param {Pixel} back
 * @returns {Pixel}
 */
function gradientARGB(front, back) {}

/**
 * @param {Pixel} front
 * @param {Pixel} back
 * @returns {number}
 */
function distanceRGB(front, back) {
    return Math.sqrt(
        Math.pow(Math.abs(front.r - back.r), 2) +
            Math.pow(Math.abs(front.g - back.g), 2) +
            Math.pow(Math.abs(front.b - back.b), 2)
    );
}

/**
 * @param {Pixel} front
 * @param {Pixel} back
 * @param {number} lumaWeight
 * @returns {number}
 */
function distanceYCbCr(front, back, lumaWeight) {
    const redDifference = front.r - back.r;
    const greenDifference = front.g - back.g;
    const blueDifference = front.b - back.b;

    const k_red = 0.299;
    const k_green = 0.587;
    const k_blue = 0.114;

    const scale_red = 0.5 / (1 - k_red);
    const scale_blue = 0.5 / (1 - k_blue);

    const y = k_red * redDifference + k_green * greenDifference + k_blue * blueDifference;
    const cb = scale_blue * (blueDifference - y);
    const cr = scale_red * (redDifference - y);

    return Math.sqrt(Math.pow(lumaWeight * y, 2) + Math.pow(cb, 2) + Math.pow(cr, 2));
}

/**
 * @param {Kernel4} kernel
 * @returns {BlendResult}
 */
function preprocessCorners(kernel) {
    const blendResult = new BlendResult();

    if (
        (kernel.f.equals(kernel.g) && kernel.j.equals(kernel.k)) ||
        (kernel.f.equals(kernel.j) && kernel.g.equals(kernel.k))
    ) {
        return blendResult;
    }

    /**
     * @param {Pixel} front
     * @param {Pixel} back
     * @returns {number}
     */
    function dist(front, back) {
        return distanceYCbCr(front, back, config.lumaWeight);
    }

    const jg =
        dist(kernel.i, kernel.f) +
        dist(kernel.f, kernel.c) +
        dist(kernel.n, kernel.k) +
        dist(kernel.k, kernel.h) +
        config.centerDirectionBias * dist(kernel.j, kernel.g);
    const fk =
        dist(kernel.e, kernel.j) +
        dist(kernel.j, kernel.o) +
        dist(kernel.b, kernel.g) +
        dist(kernel.g, kernel.l) +
        config.centerDirectionBias * dist(kernel.f, kernel.k);

    if (jg < fk) {
        const dominantGradient = config.dominantDirectionThreshold * jg < fk;
        if (!kernel.f.equals(kernel.g) && !kernel.f.equals(kernel.j))
            blendResult.blend_f = dominantGradient ? BlendType.BLEND_DOMINANT : BlendType.BLEND_NORMAL;

        if (!kernel.k.equals(kernel.j) && !kernel.k.equals(kernel.g))
            blendResult.blend_k = dominantGradient ? BlendType.BLEND_DOMINANT : BlendType.BLEND_NORMAL;
    } else if (fk < jg) {
        const dominantGradient = cfg.dominantDirectionThreshold * fk < jg;
        if (!kernel.j.equals(kernel.f) && !kernel.j.equals(kernel.k))
            blendResult.blend_j = dominantGradient ? BlendType.BLEND_DOMINANT : BlendType.BLEND_NORMAL;

        if (!kernel.g.equals(kernel.f) && !kernel.g.equals(kernel.k))
            blendResult.blend_g = dominantGradient ? BlendType.BLEND_DOMINANT : BlendType.BLEND_NORMAL;
    }
    return blendResult;
}

/**
 * @param {number} blendType
 * @returns {boolean}
 */
function blendingNeeded(blendType) {
    return blendType != BlendType.BLEND_NONE;
}

/**
 *
 * @param {Kernel3} kernel
 * @param {Pixel} target
 * @param {number} targetWidth
 * @param {BlendResult} blendResult
 */
function blendPixel(kernel, target, targetWidth, blendResult) {
    if (blendResult.getBottomRight() >= BlendType.BLEND_NORMAL) {
        /**
         * @param {Pixel} front
         * @param {Pixel} back
         * @returns {boolean}
         */
        function eq(front, back) {
            return distanceYCbCr(front, back, config.lumaWeight) < config.equalColorThreshold;
        }

        /**
         * @param {Pixel} front
         * @param {Pixel} back
         * @returns {number}
         */
        function dist(front, back) {
            return distanceYCbCr(front, back, config.lumaWeight);
        }

        /**
         * @returns {boolean}
         */
        function doLineBlend() {
            if (blendResult.getBottomRight() >= BlendType.BLEND_DOMINANT) {
                return true;
            }

            if (blendResult.getTopRight() !== BlendType.BLEND_NONE && !eq(kernel.e, kernel.g)) {
                return false;
            }
            if (blendResult.getBottomLeft() !== BlendType.BLEND_NONE && !eq(kernel.e, kernel.c)) {
                return false;
            }

            if (
                !eq(kernel.e, kernel.i) &&
                eq(kernel.g, kernel.h) &&
                eq(kernel.h, kernel.i) &&
                eq(kernel.i, kernel.f) &&
                eq(kernel.f, kernel.c)
            ) {
                return false;
            }

            return true;
        }

        const pixel = dist(kernel.e, kernel.f) <= dist(kernel.e, kernel.h) ? kernel.f : kernel.h;

        if (doLineBlend()) {
            const fg = dist(kernel.f, kernel.g);
            const hc = dist(kernel.h, kernel.c);

            const haveShallowLine =
                config.steepDirectionThreshold * fg <= hc && !kernel.e.equals(kernel.g) && !kernel.d.equals(kernel.g);
            const haveSteepLine =
                config.steepDirectionThreshold * hc <= fg && !kernel.e.equals(kernel.c) && !kernel.b.equals(kernel.c);

            // todo: scaler-specific line blending

            // todo: scaler-specific corner blending
        }
    }
}

/**
 * @param {Pixel[]} pixelData
 * @param {number} width
 * @param {number} height
 * @param {number} scale
 */
function scaleXBRZ(data, width, height, scale) {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const kernel3 = Kernel3.getAtPosition(data, width, x, y);
            const kernel4 = Kernel4.getAtPosition(data, width, x, y);
            const blendResult = preprocessCorners(kernel4);
            if (blendingNeeded(blendResult.getBottomRight())) {
                blendPixel(kernel3, data[y * width + x], width, blendResult);
            }
        }
    }
}
