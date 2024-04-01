<script lang="ts">
    import { fadeIn, fadeOut } from "$lib/transition";
    import type { PageData } from "./$types";
    import { fmt } from "$lib/intl";

    export let data: PageData;

    const ingredient = data.ingredient(0);
</script>

<svelte:head>
    <title>{$fmt(`ingredients.${ingredient.id}.name`)}</title>
</svelte:head>

<main in:fadeIn out:fadeOut>
    <h1>{$fmt(`ingredients.${ingredient.id}.name`)}</h1>
    <p>{$fmt(`ingredients.${ingredient.id}.description`)}</p>
</main>

<style>
    main {
        max-width: 48rem;
    }
</style>
