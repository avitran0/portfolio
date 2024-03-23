<a href="https://github.com/avitran0/portfolio" class="github-link">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path
            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
        />
    </svg>
</a>
<div id="slot-container">
    <slot />
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

        --font-size-xlarge: 2.5rem;
        --font-size-large: 2rem;
        --font-size-medium: 1.5rem;
        --font-size-small: 1.2rem;

        --transition-linear: 0.1s linear;
        --transition-ease: 0.15s cubic-bezier(0.65, 0, 0.35, 1);

        --border-text: 2px solid var(--color-text);
        --border-blue: 2px solid var(--color-blue);
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

    :global(main) {
        margin: 0 auto;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
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

    footer {
        margin: 1rem 0;
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        font-family: var(--font-zilla-slab);
        font-size: var(--font-size-small);
    }

    .github-link {
        color: var(--color-text);
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        top: 1rem;
        right: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        border: 2px solid var(--color-text);
        border-radius: 0.5rem;
    }

    .github-link > svg {
        width: 100%;
        height: 100%;
    }

    .github-link:visited {
        color: var(--color-text);
    }

    .github-link:hover {
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
