<script>
    import { fadeIn, fadeOut } from "$lib/transition";
    import { Recipes } from "$lib/recipe_list";
</script>

<svelte:head>
    <title>Recipes</title>
    <meta name="description" content="Recipes" />
</svelte:head>

<main in:fadeIn out:fadeOut>
    <h1>Recipes</h1>
    {#each Object.values(Recipes) as r}
        {@const recipe = r(0)}
        <a href={`/recipes/${recipe.id}`}>{recipe.name}</a>
    {/each}
</main>

<style>
</style>
