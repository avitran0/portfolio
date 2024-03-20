const BASE_PATH = "/game/assets/";

/**
 * @param {string} path
 * @returns {Promise<ImageBitmap>}
 */
export async function loadSprite(path) {
    const data = await fetch(BASE_PATH + path);
    const blob = await data.blob();
    return createImageBitmap(blob);
}

export const FontSizes = {
    Small: "1.2rem",
    Medium: "1.5rem",
    Large: "2rem",
    XLarge: "2.4rem",
};

export const Colors = {
    CrustDark: "#0f0f14",
    MantleDark: "#181820",
    Base: "#1e1e28",
    Mantle: "#2d2d3c",
    Crust: "#3c3c4b",
    Surface: "#505064",
    Overlay: "#6e6e8c",
    Subtext: "#c8c8dc",
    Text: "#ffffff",
    Red: "#f06464",
    Orange: "#f08c5a",
    Yellow: "#f0c878",
    Green: "#a0f082",
    Teal: "#50c8c8",
    Blue: "#6496f0",
    Purple: "#b478f0",
};

export const Fonts = {
    ZillaSlab: `${FontSizes.Medium} ZillaSlab, sans-serif`,
};
