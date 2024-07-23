<script lang="ts">
    import { fmt } from "$lib/intl";
    import { fadeIn, fadeOut } from "$lib/transition";
</script>

<svelte:head>
    <title>Felix Fröhlich</title>
    <meta name="description" content="Portfolio" />
</svelte:head>

<main in:fadeIn out:fadeOut>
    <h2>{$fmt("home.projects")}</h2>
    <a href="/resource-calculator">{$fmt("resource_calculator.title")}</a>
    <a href="/colors">{$fmt("color_scheme.title")}</a>
    <a href="/canvas">{$fmt("canvas.title")}</a>
    <a href="/recipes">{$fmt("recipes._meta.title")}</a>
    <a href="/ingredients">{$fmt("ingredients._meta.title")}</a>
</main>
