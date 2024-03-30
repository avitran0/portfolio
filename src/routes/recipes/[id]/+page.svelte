<script lang="ts">
    import { fadeIn, fadeOut } from "$lib/transition";
    import type { PageData } from "./$types";
    import { DefaultAmounts } from "$lib/recipe_list";

    export let data: PageData;

    let amount = DefaultAmounts[data.recipe(0).id];

    let recipe = data.recipe(amount);
    $: recipe = data.recipe(amount);
</script>

<svelte:head>
    <title>{recipe.name}</title>
</svelte:head>

<main in:fadeIn out:fadeOut>
    <h1>{recipe.name}</h1>
    {#each recipe.ingredients as ingredient}
        <p>{ingredient.name}: {ingredient.amount}{ingredient.unit}</p>
    {/each}
    {#each recipe.steps as step}
        <p>{step}</p>
    {/each}
</main>
