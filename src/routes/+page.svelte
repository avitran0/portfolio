<script lang="ts">
    import { blur } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
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
            "--color-purple"
        ];
        if (root === null) {
            throw new Error("Could not find :root element");
        }
        colorNames.forEach((colorName) => {
            colorVars[colorName.replace("--color-", "")] = getComputedStyle(root).getPropertyValue(colorName);
        });
        console.log(colorVars);
    });

    let colorScheme: HTMLDivElement;
</script>

<svelte:head>
    <title>Felix Fröhlich</title>
</svelte:head>

<main in:blur={{ delay: 200, duration: 200, easing: cubicOut }} out:blur={{ duration: 200, easing: cubicOut }}>
    <h1>Felix Fröhlich</h1>
    <h2>Projects</h2>
    <a href="/resource-calculator">Resource Calculator</a>
    <div bind:this={colorScheme} id="color-scheme">
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
    }

    .color {
        width: 8rem;
        margin: 1rem;
        border: 2px solid var(--color-text);
        border-radius: 0.5rem;
    }

    .color > :first-child {
        width: 100%;
        height: 4rem;
        border-radius: 0.5rem 0.5rem 0 0;
    }

    .color > :last-child {
        font-family: var(--font-zilla-slab);
        font-size: var(--font-size-small);
        padding: 0.5rem;
    }
</style>
