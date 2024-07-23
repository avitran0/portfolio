<script lang="ts">
    import { page } from "$app/stores";
    import { fadeIn, fadeOut } from "$lib/transition";
</script>

<svelte:head>
    <title>{$page.status} - {$page.error?.message}</title>
</svelte:head>

<main in:fadeIn out:fadeOut>
    <h1>{$page.status} - {$page.error?.message}</h1>
</main>
