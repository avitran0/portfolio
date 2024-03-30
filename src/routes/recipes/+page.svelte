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
        <a href={`/recipes/${recipe.id}`}>
            <img src={"/recipes/" + recipe.id + ".png"} alt="" />
            <div>
                <p>{recipe.name}</p>
                <p>{recipe.description}</p>
            </div>
        </a>
    {/each}
</main>

<style>
    a {
        display: flex;
        border: var(--border-text);
        border-radius: 0.5rem;
        padding: 0.5rem;
        gap: 0.5rem;
        color: var(--color-text);
    }

    a:hover {
        border-color: var(--color-blue);
        color: var(--color-blue);
    }

    a > img {
        width: 6rem;
        height: 6rem;
    }

    a > div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        text-align: left;
    }

    a > div > p:nth-child(2) {
        font-size: var(--font-size-xsmall);
    }
</style>
