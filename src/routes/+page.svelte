<script lang="ts">
    import { fadeIn, fadeOut } from "$lib/transition";
    import { fmt } from "$lib/intl";
</script>

<svelte:head>
    <title>Felix Fröhlich</title>
    <meta name="description" content="Portfolio" />
</svelte:head>

<main in:fadeIn out:fadeOut>
    <h1>Felix Fröhlich</h1>
    <h2>{$fmt("home.projects")}</h2>
    <a href="/resource-calculator">{$fmt("resource-calculator.title")}</a>
    <a href="/colors">{$fmt("color-scheme.title")}</a>
    <a href="/canvas">{$fmt("canvas.title")}</a>
    <a href="/recipes">{$fmt("recipes._meta.title")}</a>
    <a href="/ingredients">{$fmt("ingredients._meta.title")}</a>
</main>
