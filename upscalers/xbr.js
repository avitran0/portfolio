import { Pixel } from "./pixel.js";

const weight1 = 0.129633;
const weight2 = 0.175068;
const w1 = -weight1;
const w2 = weight1 + 0.5;
const w3 = -weight2;
const w4 = weight2 + 0.5;

/**
 * @param {number} A
 * @param {number} B
 * @returns {number}
 */
function df(A, B) {
    return Math.abs(A - B);
}

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @returns {number}
 */
function min4(a, b, c, d) {
    return Math.min(Math.min(a, b), Math.min(c, d));
}

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @param {number} d
 * @returns {number}
 */
function max4(a, b, c, d) {
    return Math.max(Math.max(a, b), Math.max(c, d));
}

/**
 * @param {number} x
 * @param {number} floor
 * @param {number} ceil
 * @returns {number}
 */
function clamp(x, floor, ceil) {
    return Math.max(Math.min(x, ceil), floor);
}

/*
                         P1
|P0|B |C |P1|         C     F4          |a0|b1|c2|d3|
|D |E |F |F4|      B     F     I4       |b0|c1|d2|e3|   |e1|i1|i2|e2|
|G |H |I |I4|   P0    E  A  I     P3    |c0|d1|e2|f3|   |e3|i3|i4|e4|
|P2|H5|I5|P3|      D     H     I5       |d0|e1|f2|g3|
                      G     H5
                         P2

sx, sy
-1  -1 | -2  0   (x+y) (x-y)    -3  1  (x+y-1)  (x-y+1)
-1   0 | -1 -1                  -2  0
-1   1 |  0 -2                  -1 -1
-1   2 |  1 -3                   0 -2

 0  -1 | -1  1   (x+y) (x-y)      ...     ...     ...
 0   0 |  0  0
 0   1 |  1 -1
 0   2 |  2 -2

 1  -1 |  0  2   ...
 1   0 |  1  1
 1   1 |  2  0
 1   2 |  3 -1

 2  -1 |  1  3   ...
 2   0 |  2  2
 2   1 |  3  1
 2   2 |  4  0


*/

/**
 *
 * @param {number[][]} mat
 * @param {number[]} wp
 * @returns {number}
 */
function diagonal_edge(mat, wp) {
    const dw1 =
        wp[0] *
            (df(mat[0][2], mat[1][1]) +
                df(mat[1][1], mat[2][0]) +
                df(mat[1][3], mat[2][2]) +
                df(mat[2][2], mat[3][1])) +
        wp[1] * (df(mat[0][3], mat[1][2]) + df(mat[2][1], mat[3][0])) +
        wp[2] * (df(mat[0][3], mat[2][1]) + df(mat[1][2], mat[3][0])) +
        wp[3] * df(mat[1][2], mat[2][1]) +
        wp[4] * (df(mat[0][2], mat[2][0]) + df(mat[1][3], mat[3][1])) +
        wp[5] * (df(mat[0][1], mat[1][0]) + df(mat[2][3], mat[3][2]));

    const dw2 =
        wp[0] *
            (df(mat[0][1], mat[1][2]) +
                df(mat[1][2], mat[2][3]) +
                df(mat[1][0], mat[2][1]) +
                df(mat[2][1], mat[3][2])) +
        wp[1] * (df(mat[0][0], mat[1][1]) + df(mat[2][2], mat[3][3])) +
        wp[2] * (df(mat[0][0], mat[2][2]) + df(mat[1][1], mat[3][3])) +
        wp[3] * df(mat[1][1], mat[2][2]) +
        wp[4] * (df(mat[1][0], mat[3][2]) + df(mat[0][1], mat[2][3])) +
        wp[5] * (df(mat[0][2], mat[1][3]) + df(mat[2][0], mat[3][1]));

    return dw1 - dw2;
}

// Not used yet...
/**
 *
 * @param {number[][]} mat
 * @param {number[]} wp
 * @returns {number}
 */
function cross_edge(mat, wp) {
    const hvw1 =
        wp[3] * (df(mat[1][1], mat[2][1]) + df(mat[1][2], mat[2][2])) +
        wp[0] *
            (df(mat[0][1], mat[1][1]) +
                df(mat[2][1], mat[3][1]) +
                df(mat[0][2], mat[1][2]) +
                df(mat[2][2], mat[3][2])) +
        wp[2] *
            (df(mat[0][1], mat[2][1]) + df(mat[1][1], mat[3][1]) + df(mat[0][2], mat[2][2]) + df(mat[1][2], mat[3][2]));

    const hvw2 =
        wp[3] * (df(mat[1][1], mat[1][2]) + df(mat[2][1], mat[2][2])) +
        wp[0] *
            (df(mat[1][0], mat[1][1]) +
                df(mat[2][0], mat[2][1]) +
                df(mat[1][2], mat[1][3]) +
                df(mat[2][2], mat[2][3])) +
        wp[2] *
            (df(mat[1][0], mat[1][2]) + df(mat[1][1], mat[1][3]) + df(mat[2][0], mat[2][2]) + df(mat[2][1], mat[2][3]));

    return hvw1 - hvw2;
}

///////////////////////// Super-xBR scaling
// perform super-xbr (fast shader version) scaling by factor f=2 only.
/**
 * @param {Pixel[]} data
 * @param {number} width
 * @param {number} height
 * @returns {Pixel[]}
 */
export function scaleSuperXBRT(data, width, height) {
    const scale = 2;
    const outputWidth = width * scale,
        outputHeight = height * scale;
    const outputData = Array.from(outputWidth * outputHeight);

    const wp = [2.0, 1.0, -1.0, 4.0, -1.0, 1.0];

    // First Pass
    for (let y = 0; y < outputHeight; ++y) {
        for (let x = 0; x < outputWidth; ++x) {
            let r = Array.from(Array(4), () => new Array(4));
            let g = Array.from(Array(4), () => new Array(4));
            let b = Array.from(Array(4), () => new Array(4));
            let a = Array.from(Array(4), () => new Array(4));
            let Y = Array.from(Array(4), () => new Array(4));
            let cx = x / scale,
                cy = y / scale; // central pixels on original images
            // sample supporting pixels in original image
            for (let sx = -1; sx <= 2; ++sx) {
                for (let sy = -1; sy <= 2; ++sy) {
                    // clamp pixel locations
                    const csy = clamp(sy + cy, 0, height - 1);
                    const csx = clamp(sx + cx, 0, width - 1);
                    // sample & add weighted components
                    const sample = data[csy * width + csx];
                    r[sx + 1][sy + 1] = sample.r;
                    g[sx + 1][sy + 1] = sample.g;
                    b[sx + 1][sy + 1] = sample.b;
                    a[sx + 1][sy + 1] = sample.a;
                    Y[sx + 1][sy + 1] =
                        0.2126 * r[sx + 1][sy + 1] + 0.7152 * g[sx + 1][sy + 1] + 0.0722 * b[sx + 1][sy + 1];
                }
            }
            const min_r_sample = min4(r[1][1], r[2][1], r[1][2], r[2][2]);
            const min_g_sample = min4(g[1][1], g[2][1], g[1][2], g[2][2]);
            const min_b_sample = min4(b[1][1], b[2][1], b[1][2], b[2][2]);
            const min_a_sample = min4(a[1][1], a[2][1], a[1][2], a[2][2]);
            const max_r_sample = max4(r[1][1], r[2][1], r[1][2], r[2][2]);
            const max_g_sample = max4(g[1][1], g[2][1], g[1][2], g[2][2]);
            const max_b_sample = max4(b[1][1], b[2][1], b[1][2], b[2][2]);
            const max_a_sample = max4(a[1][1], a[2][1], a[1][2], a[2][2]);
            const d_edge = diagonal_edge(Y, wp);
            const r1 = w1 * (r[0][3] + r[3][0]) + w2 * (r[1][2] + r[2][1]);
            const g1 = w1 * (g[0][3] + g[3][0]) + w2 * (g[1][2] + g[2][1]);
            const b1 = w1 * (b[0][3] + b[3][0]) + w2 * (b[1][2] + b[2][1]);
            const a1 = w1 * (a[0][3] + a[3][0]) + w2 * (a[1][2] + a[2][1]);
            const r2 = w1 * (r[0][0] + r[3][3]) + w2 * (r[1][1] + r[2][2]);
            const g2 = w1 * (g[0][0] + g[3][3]) + w2 * (g[1][1] + g[2][2]);
            const b2 = w1 * (b[0][0] + b[3][3]) + w2 * (b[1][1] + b[2][2]);
            const a2 = w1 * (a[0][0] + a[3][3]) + w2 * (a[1][1] + a[2][2]);

            let af, rf, gf, bf;
            // generate and write result
            if (d_edge <= 0.0) {
                rf = r1;
                gf = g1;
                bf = b1;
                af = a1;
            } else {
                rf = r2;
                gf = g2;
                bf = b2;
                af = a2;
            }
            // anti-ringing, clamp.
            rf = clamp(rf, min_r_sample, max_r_sample);
            gf = clamp(gf, min_g_sample, max_g_sample);
            bf = clamp(bf, min_b_sample, max_b_sample);
            af = clamp(af, min_a_sample, max_a_sample);
            const ri = clamp(Math.ceil(rf), 0, 255);
            const gi = clamp(Math.ceil(gf), 0, 255);
            const bi = clamp(Math.ceil(bf), 0, 255);
            const ai = clamp(Math.ceil(af), 0, 255);

            outputData[y * outputWidth + x] =
                outputData[y * outputWidth + x + 1] =
                outputData[(y + 1) * outputWidth + x] =
                    data[cy * width + cx];
            outputData[(y + 1) * outputWidth + x + 1] = new Pixel(ri, gi, bi, ai);
            ++x;
        }
        ++y;
    }

    // Second Pass
    wp[0] = 2.0;
    wp[1] = 0.0;
    wp[2] = 0.0;
    wp[3] = 0.0;
    wp[4] = 0.0;
    wp[5] = 0.0;

    for (let y = 0; y < outputHeight; ++y) {
        for (let x = 0; x < outputWidth; ++x) {
            const r = Array.from(Array(4), () => new Array(4));
            const g = Array.from(Array(4), () => new Array(4));
            const b = Array.from(Array(4), () => new Array(4));
            const a = Array.from(Array(4), () => new Array(4));
            const Y = Array.from(Array(4), () => new Array(4));
            // sample supporting pixels in original image
            for (let sx = -1; sx <= 2; ++sx) {
                for (let sy = -1; sy <= 2; ++sy) {
                    // clamp pixel locations
                    const csy = clamp(sx - sy + y, 0, scale * height - 1);
                    const csx = clamp(sx + sy + x, 0, scale * width - 1);
                    // sample & add weighted components
                    const sample = outputData[csy * outputWidth + csx];
                    r[sx + 1][sy + 1] = sample.r;
                    g[sx + 1][sy + 1] = sample.g;
                    b[sx + 1][sy + 1] = sample.b;
                    a[sx + 1][sy + 1] = sample.a;
                    Y[sx + 1][sy + 1] =
                        0.2126 * r[sx + 1][sy + 1] + 0.7152 * g[sx + 1][sy + 1] + 0.0722 * b[sx + 1][sy + 1];
                }
            }
            const min_r_sample = min4(r[1][1], r[2][1], r[1][2], r[2][2]);
            const min_g_sample = min4(g[1][1], g[2][1], g[1][2], g[2][2]);
            const min_b_sample = min4(b[1][1], b[2][1], b[1][2], b[2][2]);
            const min_a_sample = min4(a[1][1], a[2][1], a[1][2], a[2][2]);
            const max_r_sample = max4(r[1][1], r[2][1], r[1][2], r[2][2]);
            const max_g_sample = max4(g[1][1], g[2][1], g[1][2], g[2][2]);
            const max_b_sample = max4(b[1][1], b[2][1], b[1][2], b[2][2]);
            const max_a_sample = max4(a[1][1], a[2][1], a[1][2], a[2][2]);
            let d_edge = diagonal_edge(Y, wp);
            let r1 = w3 * (r[0][3] + r[3][0]) + w4 * (r[1][2] + r[2][1]);
            let g1 = w3 * (g[0][3] + g[3][0]) + w4 * (g[1][2] + g[2][1]);
            let b1 = w3 * (b[0][3] + b[3][0]) + w4 * (b[1][2] + b[2][1]);
            let a1 = w3 * (a[0][3] + a[3][0]) + w4 * (a[1][2] + a[2][1]);
            let r2 = w3 * (r[0][0] + r[3][3]) + w4 * (r[1][1] + r[2][2]);
            let g2 = w3 * (g[0][0] + g[3][3]) + w4 * (g[1][1] + g[2][2]);
            let b2 = w3 * (b[0][0] + b[3][3]) + w4 * (b[1][1] + b[2][2]);
            let a2 = w3 * (a[0][0] + a[3][3]) + w4 * (a[1][1] + a[2][2]);
            let af, rf, gf, bf;
            // generate and write result
            if (d_edge <= 0.0) {
                rf = r1;
                gf = g1;
                bf = b1;
                af = a1;
            } else {
                rf = r2;
                gf = g2;
                bf = b2;
                af = a2;
            }
            // anti-ringing, clamp.
            rf = clamp(rf, min_r_sample, max_r_sample);
            gf = clamp(gf, min_g_sample, max_g_sample);
            bf = clamp(bf, min_b_sample, max_b_sample);
            af = clamp(af, min_a_sample, max_a_sample);
            let ri = clamp(Math.ceil(rf), 0, 255);
            let gi = clamp(Math.ceil(gf), 0, 255);
            let bi = clamp(Math.ceil(bf), 0, 255);
            let ai = clamp(Math.ceil(af), 0, 255);
            outputData[y * outputWidth + x + 1] = new Pixel(ri, gi, bi, ai);

            for (let sx = -1; sx <= 2; ++sx) {
                for (let sy = -1; sy <= 2; ++sy) {
                    // clamp pixel locations
                    const csy = clamp(sx - sy + 1 + y, 0, scale * height - 1);
                    const csx = clamp(sx + sy - 1 + x, 0, scale * width - 1);
                    // sample & add weighted components
                    const sample = outputData[csy * outputWidth + csx];
                    r[sx + 1][sy + 1] = sample.r;
                    g[sx + 1][sy + 1] = sample.g;
                    b[sx + 1][sy + 1] = sample.b;
                    a[sx + 1][sy + 1] = sample.a;
                    Y[sx + 1][sy + 1] =
                        0.2126 * r[sx + 1][sy + 1] + 0.7152 * g[sx + 1][sy + 1] + 0.0722 * b[sx + 1][sy + 1];
                }
            }
            d_edge = diagonal_edge(Y, wp);
            r1 = w3 * (r[0][3] + r[3][0]) + w4 * (r[1][2] + r[2][1]);
            g1 = w3 * (g[0][3] + g[3][0]) + w4 * (g[1][2] + g[2][1]);
            b1 = w3 * (b[0][3] + b[3][0]) + w4 * (b[1][2] + b[2][1]);
            a1 = w3 * (a[0][3] + a[3][0]) + w4 * (a[1][2] + a[2][1]);
            r2 = w3 * (r[0][0] + r[3][3]) + w4 * (r[1][1] + r[2][2]);
            g2 = w3 * (g[0][0] + g[3][3]) + w4 * (g[1][1] + g[2][2]);
            b2 = w3 * (b[0][0] + b[3][3]) + w4 * (b[1][1] + b[2][2]);
            a2 = w3 * (a[0][0] + a[3][3]) + w4 * (a[1][1] + a[2][2]);
            // generate and write result
            if (d_edge <= 0.0) {
                rf = r1;
                gf = g1;
                bf = b1;
                af = a1;
            } else {
                rf = r2;
                gf = g2;
                bf = b2;
                af = a2;
            }
            // anti-ringing, clamp.
            rf = clamp(rf, min_r_sample, max_r_sample);
            gf = clamp(gf, min_g_sample, max_g_sample);
            bf = clamp(bf, min_b_sample, max_b_sample);
            af = clamp(af, min_a_sample, max_a_sample);
            ri = clamp(Math.ceil(rf), 0, 255);
            gi = clamp(Math.ceil(gf), 0, 255);
            bi = clamp(Math.ceil(bf), 0, 255);
            ai = clamp(Math.ceil(af), 0, 255);
            outputData[(y + 1) * outputWidth + x] = new Pixel(ri, gi, bi, ai);
            ++x;
        }
        ++y;
    }

    // Third Pass
    wp[0] = 2.0;
    wp[1] = 1.0;
    wp[2] = -1.0;
    wp[3] = 4.0;
    wp[4] = -1.0;
    wp[5] = 1.0;

    for (let y = outputHeight - 1; y >= 0; --y) {
        for (let x = outputWidth - 1; x >= 0; --x) {
            const r = Array.from(Array(4), () => new Array(4));
            const g = Array.from(Array(4), () => new Array(4));
            const b = Array.from(Array(4), () => new Array(4));
            const a = Array.from(Array(4), () => new Array(4));
            const Y = Array.from(Array(4), () => new Array(4));
            for (let sx = -2; sx <= 1; ++sx) {
                for (let sy = -2; sy <= 1; ++sy) {
                    // clamp pixel locations
                    let csy = clamp(sy + y, 0, scale * height - 1);
                    let csx = clamp(sx + x, 0, scale * width - 1);
                    // sample & add weighted components
                    let sample = outputData[csy * outputWidth + csx];
                    r[sx + 2][sy + 2] = sample.r;
                    g[sx + 2][sy + 2] = sample.g;
                    b[sx + 2][sy + 2] = sample.b;
                    a[sx + 2][sy + 2] = sample.a;
                    Y[sx + 2][sy + 2] =
                        0.2126 * r[sx + 2][sy + 2] + 0.7152 * g[sx + 2][sy + 2] + 0.0722 * b[sx + 2][sy + 2];
                }
            }
            const min_r_sample = min4(r[1][1], r[2][1], r[1][2], r[2][2]);
            const min_g_sample = min4(g[1][1], g[2][1], g[1][2], g[2][2]);
            const min_b_sample = min4(b[1][1], b[2][1], b[1][2], b[2][2]);
            const min_a_sample = min4(a[1][1], a[2][1], a[1][2], a[2][2]);
            const max_r_sample = max4(r[1][1], r[2][1], r[1][2], r[2][2]);
            const max_g_sample = max4(g[1][1], g[2][1], g[1][2], g[2][2]);
            const max_b_sample = max4(b[1][1], b[2][1], b[1][2], b[2][2]);
            const max_a_sample = max4(a[1][1], a[2][1], a[1][2], a[2][2]);
            const d_edge = diagonal_edge(Y, wp);
            const r1 = w1 * (r[0][3] + r[3][0]) + w2 * (r[1][2] + r[2][1]);
            const g1 = w1 * (g[0][3] + g[3][0]) + w2 * (g[1][2] + g[2][1]);
            const b1 = w1 * (b[0][3] + b[3][0]) + w2 * (b[1][2] + b[2][1]);
            const a1 = w1 * (a[0][3] + a[3][0]) + w2 * (a[1][2] + a[2][1]);
            const r2 = w1 * (r[0][0] + r[3][3]) + w2 * (r[1][1] + r[2][2]);
            const g2 = w1 * (g[0][0] + g[3][3]) + w2 * (g[1][1] + g[2][2]);
            const b2 = w1 * (b[0][0] + b[3][3]) + w2 * (b[1][1] + b[2][2]);
            const a2 = w1 * (a[0][0] + a[3][3]) + w2 * (a[1][1] + a[2][2]);
            let af, rf, gf, bf;
            // generate and write result
            if (d_edge <= 0.0) {
                rf = r1;
                gf = g1;
                bf = b1;
                af = a1;
            } else {
                rf = r2;
                gf = g2;
                bf = b2;
                af = a2;
            }
            // anti-ringing, clamp.
            rf = clamp(rf, min_r_sample, max_r_sample);
            gf = clamp(gf, min_g_sample, max_g_sample);
            bf = clamp(bf, min_b_sample, max_b_sample);
            af = clamp(af, min_a_sample, max_a_sample);
            const ri = clamp(Math.ceil(rf), 0, 255);
            const gi = clamp(Math.ceil(gf), 0, 255);
            const bi = clamp(Math.ceil(bf), 0, 255);
            const ai = clamp(Math.ceil(af), 0, 255);
            outputData[y * outputWidth + x] = new Pixel(ri, gi, bi, ai);
        }
    }
    return outputData;
}
