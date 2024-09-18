import type { TransitionConfig } from "svelte/transition";
import { cubicOut, quadOut } from "svelte/easing";

export function fadeIn(node: Element): TransitionConfig {
    const o = +getComputedStyle(node).opacity;
    return {
        delay: 200,
        duration: 200,
        easing: cubicOut,
        css: (t) => `opacity: ${t * o}`,
    };
}

export function fadeOut(node: Element): TransitionConfig {
    const o = +getComputedStyle(node).opacity;
    return {
        delay: 0,
        duration: 200,
        easing: cubicOut,
        css: (t) => `opacity: ${t * o}`,
    };
}

/** only works on path and polyline tags */
export function draw(node: SVGElement & { getTotalLength(): number }): TransitionConfig {
    let len = node.getTotalLength();
    const style = getComputedStyle(node);
    if (style.strokeLinecap !== "butt") {
        len += parseInt(style.strokeWidth);
    }
    return {
        delay: 0,
        duration: 750,
        easing: quadOut,
        css: (_, u) => `
			stroke-dasharray: ${len};
			stroke-dashoffset: ${u * len};
		`,
    };
}
