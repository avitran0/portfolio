<script>
    import { fadeIn, fadeOut } from "$lib/transition";
    import { fmt } from "$lib/intl";
    import { Ingredients, ingredient as ing } from "$lib/ingredients";
</script>

<svelte:head>
    <title>{$fmt("ingredients._meta.title")}</title>
    <meta name="description" content="Ingredients" />
</svelte:head>

<main in:fadeIn out:fadeOut>
    <h1>{$fmt("ingredients._meta.title")}</h1>
    <div class="ingredients">
        {#each Object.values(Ingredients) as i}
            {@const ingredient = ing(i)}
            <a href={`/ingredients/${ingredient.id}`}>
                <!--img src={"/ingredients/" + ingredient.id + ".jpg"} alt="" /-->
                <div>
                    <p>{$fmt(`ingredients.${ingredient.id}.name`)}</p>
                    <p>{$fmt(`ingredients.${ingredient.id}.description`)}</p>
                </div>
            </a>
        {/each}
    </div>
</main>

<style>
    .ingredients {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: space-between;
    }

    a {
        display: flex;
        border: var(--border-text);
        border-radius: 0.5rem;
        padding: 0.5rem;
        gap: 0.5rem;
        color: var(--color-text);
        min-width: 8rem;
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
</style>
