<script>
    import { fadeIn, fadeOut } from "$lib/transition";
    import { fmt } from "$lib/intl";
    import { Ingredients } from "$lib/ingredient_list";
</script>

<svelte:head>
    <title>{$fmt("ingredients._meta.title")}</title>
    <meta name="description" content="Ingredients" />
</svelte:head>

<main in:fadeIn out:fadeOut>
    <h1>{$fmt("ingredients._meta.title")}</h1>
    {#each Object.values(Ingredients) as i}
        {@const ingredient = i(0)}
        <a href={`/ingredients/${ingredient.id}`}>
            <img src={"/ingredients/" + ingredient.id + ".jpg"} alt="" />
            <div>
                <p>{$fmt(`ingredients.${ingredient.id}.name`)}</p>
                <p>{$fmt(`ingredients.${ingredient.id}.description`)}</p>
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
        max-width: 32rem;
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
