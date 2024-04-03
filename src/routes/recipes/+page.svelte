<script lang="ts">
    import { fadeIn, fadeOut } from "$lib/transition";
    import { fmt, language } from "$lib/intl";
    import { Recipes, recipe as rec } from "$lib/recipes";
    import { onDestroy } from "svelte";

    let sortedRecipes = Recipes;
    let sortMethod = "name";

    function sortRecipes() {
        if (sortMethod === "name") {
            sortedRecipes = Object.fromEntries(
                Object.entries(Recipes).sort((a, b) => {
                    return $fmt(`recipes.${a[0]}.name`).localeCompare($fmt(`recipes.${b[0]}.name`));
                }),
            );
        } else if (sortMethod === "category") {
            sortedRecipes = Object.fromEntries(
                Object.entries(Recipes).sort((a, b) => {
                    return $fmt(`recipes.${a[0]}.category`).localeCompare($fmt(`recipes.${b[0]}.category`));
                }),
            );
        }
    }

    const x = language.subscribe((value) => {
        sortRecipes();
    });
    onDestroy(() => x());
</script>

<svelte:head>
    <title>{$fmt("recipes._meta.title")}</title>
    <meta name="description" content="Recipes" />
</svelte:head>

<main in:fadeIn out:fadeOut>
    <h1>{$fmt("recipes._meta.title")}</h1>
    <div id="sort-container">
        <span>{$fmt("general.sort-by")}:</span>
        <label for="sort" class="hide">{$fmt("general.sort-by")}</label>
        <select name="sort" id="sort" bind:value={sortMethod} on:change={() => sortRecipes()}>
            <option value="name">{$fmt("general.sort.name")}</option>
            <option value="category">{$fmt("general.sort.category")}</option>
        </select>
    </div>
    <div class="recipes">
        {#each Object.values(sortedRecipes) as r}
            {@const recipe = rec(r)}
            <a href={`/recipes/${recipe.id}`}>
                <!--img src={"/recipes/" + recipe.id + ".jpg"} alt="" /-->
                <div>
                    <p>{$fmt(`recipes.${recipe.id}.name`)}</p>
                    <p>{$fmt(`recipes.${recipe.id}.description`)}</p>
                    <p>{$fmt(`recipes._meta.categories.${recipe.category}`)}</p>
                </div>
            </a>
        {/each}
    </div>
</main>

<style>
    .recipes {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    a {
        display: flex;
        border: var(--border-text);
        border-radius: 0.5rem;
        padding: 0.5rem;
        gap: 0.5rem;
        color: var(--color-text);
        max-width: 32rem;
        background-color: var(--color-highlight);
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

    a > div > p:nth-child(3) {
        font-size: var(--font-size-xsmall);
        font-style: italic;
        font-weight: bold;
    }

    #sort-container {
        width: fit-content;
        height: 2.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        flex-wrap: nowrap;
        padding-left: 0.2rem;
        gap: 0 !important;
    }

    #sort-container > span {
        font-family: var(--font-zilla-slab);
        font-size: var(--font-size-medium);
        border: var(--border-text);
        border-right: none;
        border-radius: 0.5rem 0 0 0.5rem;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 0.5rem;
        cursor: default;
    }

    select {
        font-family: var(--font-zilla-slab);
        font-size: var(--font-size-medium);
        cursor: pointer;
        color: var(--color-text);
        background-color: var(--color-highlight);
        border: none;
        flex-grow: 1;
        height: 100%;
        border-radius: 0 6px 6px 0;
        border: var(--border-text);
        margin: 0;
        transition: var(--transition-ease);
        padding: 0 0.5rem;
    }

    select:hover {
        border-color: var(--color-blue);
    }

    .hide {
        clip: rect(0, 0, 0, 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
    }
</style>
