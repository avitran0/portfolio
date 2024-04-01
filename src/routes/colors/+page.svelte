<script lang="ts">
    import { fadeIn, fadeOut } from "$lib/transition";
    import { fmt } from "$lib/intl";
    import { onMount } from "svelte";

    const colorVars: { [key: string]: string } = {};
    onMount(() => {
        // get :root element
        const root = document.querySelector(":root");
        // get all css variables containing color
        const colorNames = [
            "--color-backdrop",
            "--color-base",
            "--color-highlight",
            "--color-subtext",
            "--color-text",
            "--color-red",
            "--color-orange",
            "--color-yellow",
            "--color-green",
            "--color-teal",
            "--color-blue",
            "--color-purple",
        ];
        if (root === null) {
            throw new Error("Could not find :root element");
        }
        colorNames.forEach((colorName) => {
            colorVars[colorName.replace("--color-", "")] = getComputedStyle(root).getPropertyValue(colorName);
        });
    });
</script>

<svelte:head>
    <title>{$fmt("color-scheme.title")}</title>
</svelte:head>

<main in:fadeIn out:fadeOut>
    <h1>{$fmt("color-scheme.title")}</h1>
    <div id="color-scheme">
        {#each Object.entries(colorVars) as [key, color]}
            <div class="color">
                <div style="background-color: {color};"></div>
                <div>{key}<br />{color}</div>
            </div>
        {/each}
    </div>
</main>

<style>
    #color-scheme {
        display: flex;
        flex-wrap: wrap;
        max-width: 64rem;
        margin: 0 auto;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 2px solid var(--color-text);
        justify-content: space-evenly;
        margin-top: 1rem;
        background-color: var(--color-backdrop);
    }

    .color {
        width: 6rem;
        margin: 1rem;
        border: 2px solid var(--color-text);
        border-radius: 0.5rem;
    }

    .color > :first-child {
        width: 100%;
        height: 3rem;
        border-radius: 6px 6px 0 0;
        border-bottom: 2px solid var(--color-text);
    }

    .color > :last-child {
        font-family: var(--font-zilla-slab);
        font-size: var(--font-size-small);
        padding: 0.5rem;
    }
</style>
