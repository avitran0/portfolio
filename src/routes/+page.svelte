<script lang="ts">
    import { fadeIn, fadeOut } from "$lib/transition";
</script>

<svelte:head>
    <title>Felix Fröhlich</title>
    <meta name="description" content="Portfolio" />
</svelte:head>

<main in:fadeIn out:fadeOut>
    <h1>Felix Fröhlich</h1>
    <h2>Projects</h2>
    <a href="/resource-calculator">Resource Calculator</a>
    <a href="/colors">Color Scheme</a>
    <a href="/canvas">Canvas</a>
</main>
