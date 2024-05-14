<script lang="ts">
    import { fadeIn, fadeOut } from "$lib/transition";
    import { fmt } from "$lib/intl";
    import { run } from "./src/main";
    import { onMount } from "svelte";

    let canvas: HTMLCanvasElement;

    onMount(() => {
        run(canvas);
    });
</script>

<svelte:head>
    <title>Pokemon Emerald</title>
    <meta name="description" content="Pokemon Emerald" />
</svelte:head>

<main in:fadeIn out:fadeOut>
    <canvas bind:this={canvas}></canvas>
</main>

<style>
    canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100dvw;
        height: 100dvh;
        z-index: 2;
    }
</style>
