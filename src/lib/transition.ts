import type { TransitionConfig } from "svelte/transition";
import { cubicOut } from "svelte/easing";

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
