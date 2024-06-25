<script lang="ts">
    import { fadeIn, fadeOut } from "$lib/transition";
    import { fmt } from "$lib/intl";
    import { page } from "$app/stores";
</script>

<svelte:head>
    <title>{$page.status} - {$page.error?.message}</title>
</svelte:head>

<main in:fadeIn out:fadeOut>
    <h1>{$page.status} - {$page.error?.message}</h1>
</main>
