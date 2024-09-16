export const Colors: Record<number, string> = {
    0: "var(--color-blue)",
    1: "var(--color-green)",
    2: "var(--color-yellow)",
    3: "var(--color-orange)",
    4: "var(--color-purple)",
    5: "var(--color-text)",
};

export function getColor(index: number) {
    const color = Colors[index];
    if (color === undefined) {
        return Colors[5];
    }
    return color;
}