<script lang="ts">
    import { Languages, language, getLanguageFromNavigator } from "$lib/intl";
    import { onMount } from "svelte";

    let lang: Languages;

    onMount(() => {
        const l = getLanguageFromNavigator();
        language.set(l);
        lang = l.toUpperCase() as Languages;
    });
</script>

<div>
    <header>
        <div>
            <a href="/" id="home-link" aria-label="Go to home page">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
            </a>
        </div>
        <div>
            <select
                name="lang"
                id="lang"
                bind:value={lang}
                on:change={() => {
                    language.set(lang);
                }}>
                {#each Object.keys(Languages).filter((val) => isNaN(Number(val))) as lang}
                    <option value={lang}>{lang}</option>
                {/each}
            </select>
            <a href="https://github.com/avitran0/portfolio" id="github-link" aria-label="Go to github repository">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
            </a>
        </div>
    </header>
    <div id="slot-container">
        <slot />
    </div>
</div>
<footer>&copy; {new Date().getFullYear()} Felix Fröhlich</footer>

<style>
    @font-face {
        font-family: "ZillaSlab";
        src: url("/fonts/ZillaSlab.woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "JetBrainsMono";
        src: url("/fonts/JetBrainsMono.woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "SequelRounded";
        src: url("/fonts/SequelRounded.woff2");
        font-display: swap;
    }

    @font-face {
        font-family: "Inter";
        src: url("/fonts/Inter.woff2");
        font-display: swap;
    }

    :root {
        --color-backdrop: #181820;
        --color-base: #1e1e28;
        --color-highlight: #3c3c4b;
        --color-subtext: #c8c8dc;
        --color-text: #ffffff;
        --color-red: #f06464;
        --color-orange: #f08c5a;
        --color-yellow: #f0c878;
        --color-green: #a0f082;
        --color-teal: #50c8c8;
        --color-blue: #6496f0;
        --color-purple: #b478f0;
        --color-dialog-bg: #00000050;

        --font-zilla-slab: "ZillaSlab", serif;
        --font-jetbrains-mono: "JetBrainsMono", monospace;
        --font-sequel-rounded: "SequelRounded", sans-serif;
        --font-inter: "Inter", sans-serif;

        --font-size-xlarge: 32px;
        --font-size-large: 28px;
        --font-size-medium: 24px;
        --font-size-small: 20px;
        --font-size-xsmall: 16px;

        --transition-linear: all 0.2s linear;
        --transition-ease: all 0.15s cubic-bezier(0.65, 0, 0.35, 1);

        --border-text: 2px solid var(--color-text);
        --border-blue: 2px solid var(--color-blue);
    }

    @media (prefers-reduced-motion) {
        :root {
            --transition-linear: none;
            --transition-ease: none;
        }
    }

    :global(html) {
        background-color: var(--color-base);
        box-sizing: border-box;
        color: var(--color-text);
        scroll-behavior: smooth;
        font-family: var(--font-zilla-slab);
        color: var(--color-text);
    }

    :global(*) {
        box-sizing: border-box;
        transition: var(--transition-ease);
    }

    :global(body) {
        margin: 0;
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    :global(main > h1) {
        margin: 0 3rem;
    }

    :global(main) {
        margin: 0 auto;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-row: 1;
        grid-column: 1;
        text-align: center;
        gap: 1rem;
    }

    :global(h1) {
        font-size: var(--font-size-xlarge);
        margin: 0;
    }

    :global(h2) {
        font-size: var(--font-size-large);
        margin: 0;
    }

    :global(h3) {
        font-size: var(--font-size-medium);
        margin: 0;
    }

    :global(p) {
        font-size: var(--font-size-medium);
        margin: 0;
    }

    :global(a) {
        color: var(--color-blue);
        font-size: var(--font-size-medium);
        text-decoration: none;
        margin: 0;
    }

    :global(a:visited) {
        color: var(--color-blue);
    }

    :global(a:hover) {
        color: var(--color-text);
    }

    :global(button) {
        font-family: var(--font-zilla-slab);
        font-size: var(--font-size-medium);
        cursor: pointer;
        color: var(--color-text);
        padding: 0 0.5rem;
        border: var(--border-text);
        border-radius: 0.5rem;
        transition: var(--transition-ease);
        background-color: var(--color-highlight);
        height: 2.6rem;
    }

    :global(button:hover) {
        border: var(--border-blue);
    }

    :global(svg) {
        fill: none;
        stroke: var(--color-text);
        stroke-width: 1.6px;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    header {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 100dvw;
        padding: 1rem;
        padding-bottom: 0;
    }

    header > div {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    footer {
        margin: 1rem 0;
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        font-family: var(--font-zilla-slab);
        font-size: var(--font-size-small);
    }

    a {
        color: var(--color-text);
        width: 2.4rem;
        height: 2.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        border: 2px solid var(--color-text);
        border-radius: 0.5rem;
        z-index: 1;
    }

    a > svg {
        width: 100%;
        height: 100%;
    }

    a:visited {
        color: var(--color-text);
    }

    a:hover {
        border-color: var(--color-blue);
    }

    select {
        border: 2px solid var(--color-text);
        border-radius: 0.5rem;
        background-color: var(--color-highlight);
        color: var(--color-text);
        font-family: var(--font-zilla-slab);
        font-size: var(--font-size-medium);
        z-index: 1;
        height: 2.4rem;
        cursor: pointer;
        padding: 0 0.5rem;
    }

    select:hover {
        border-color: var(--color-blue);
    }

    #slot-container {
        display: grid;
    }

    #slot-container > * {
        grid-column: 1;
        grid-row: 1;
    }
</style>
