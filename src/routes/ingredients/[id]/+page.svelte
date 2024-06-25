<script lang="ts">
    import { fadeIn, fadeOut } from "$lib/transition";
    import type { PageData } from "./$types";
    import { fmt } from "$lib/intl";
    import { ingredient as ing } from "$lib/ingredients";

    export let data: PageData;

    const ingredient = ing(data.ingredient);
    console.info(ingredient);
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
