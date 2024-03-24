<script lang="ts">
    import { fade } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
</script>

<svelte:head>
    <title>Felix Fröhlich</title>
</svelte:head>

<main in:fade={{ delay: 200, duration: 200, easing: cubicOut }} out:fade={{ duration: 200, easing: cubicOut }}>
    <h1>Felix Fröhlich</h1>
    <h2>Projects</h2>
    <a href="/resource-calculator">Resource Calculator</a>
    <a href="/colors">Color Scheme</a>
    <a href="/canvas">Canvas</a>
</main>
