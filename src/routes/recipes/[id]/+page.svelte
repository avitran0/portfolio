<script lang="ts">
    import { fmt } from "$lib/intl";
    import { recipe as rec } from "$lib/recipes/recipes";
    import { fadeIn, fadeOut } from "$lib/transition";
    import type { PageData } from "./$types";

    export let data: PageData;

    let amount = rec(data.recipe).defaultAmount;

    let recipe = data.recipe(amount);
    $: recipe = data.recipe(amount);
</script>

<svelte:head>
    <title>{$fmt(`recipes.${recipe.id}.name`)}</title>
</svelte:head>

<main in:fadeIn out:fadeOut>
    <h1>{$fmt(`recipes.${recipe.id}.name`)}</h1>
    <div id="amount-container">
        <label for="amount-input" class="hide">{$fmt("recipes._meta.amount")}</label>
        <button
            id="minus"
            on:click={() => (amount <= 1 ? (amount = 1) : amount--)}
            aria-label="Decrement selected item amount">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M5 12l14 0" />
            </svg>
        </button>
        <input
            type="number"
            name="amount-input"
            id="amount-input"
            placeholder="amount"
            min="1"
            pattern="\d*"
            bind:value={amount} />
        <button id="plus" on:click={() => amount++} aria-label="Increment selected item amount">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
            </svg>
        </button>
    </div>
    <div id="table-container">
        {#each Object.entries(recipe.ingredients) as [name, ingredientList]}
            <table>
                <thead>
                    <tr>
                        <th colspan="2">
                            {name === ""
                                ? $fmt("ingredients._meta.title")
                                : $fmt(`recipes.${recipe.id}.ingredient_steps.${name}`)}</th>
                    </tr>
                </thead>
                {#each ingredientList as ingredient}
                    <tr>
                        <td class="bold">
                            {ingredient.amount.toLocaleString()} {$fmt(`recipes._meta.units.${ingredient.unit}`)}</td>
                        <td>
                            <p>{$fmt(`ingredients.${ingredient.id}`)}</p>
                        </td>
                    </tr>
                {/each}
            </table>
        {/each}
    </div>
    <h2>{$fmt("recipes._meta.steps")}</h2>
    <div id="recipe-steps">
        {#each recipe.steps as step, i}
            <p>{i + 1}: {$fmt(`recipes.${recipe.id}.steps.${step}`)}</p>
        {/each}
    </div>
</main>

<style>
    main {
        max-width: 48rem;
        gap: 2rem;
    }

    #table-container {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    table {
        text-align: left;
        border-collapse: collapse;
        height: fit-content;
        min-width: 16rem;
    }

    th,
    td {
        padding: 0.5rem;
    }

    th {
        font-size: var(--font-size-medium);
    }

    td {
        border-top: var(--border-text);
        border-bottom: var(--border-text);
        font-size: var(--font-size-small);
    }

    tr:nth-child(even) {
        background-color: var(--color-highlight);
    }

    .bold {
        font-weight: bold;
    }

    #amount-container {
        gap: 0;
        display: flex;
        align-items: center;
    }

    #amount-input {
        align-items: center;
        padding: 0.2rem 0.5rem;
        border: var(--border-text);
        font-size: var(--font-size-medium);
        transition: var(--transition-ease);
        background-color: transparent;
        appearance: textfield;
        width: 6rem;
        height: 2.6rem;
        font-family: var(--font-zilla-slab);
        color: var(--color-text);
    }

    #amount-input:hover {
        border-color: var(--color-blue);
    }

    #amount-input:focus {
        outline: none;
    }

    #amount-input::placeholder {
        color: var(--color-subtext);
    }

    #amount-input::-webkit-inner-spin-button,
    #amount-input::-webkit-outer-spin-button {
        appearance: none;
        margin: 0;
    }

    #amount-input {
        border-right: none;
    }

    #plus,
    #minus {
        width: 2.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
    }

    #plus > svg,
    #minus > svg {
        width: 80%;
        height: 80%;
    }

    #plus {
        border-radius: 0 0.5rem 0.5rem 0;
    }

    #minus {
        border-radius: 0.5rem 0 0 0.5rem;
        border-right: none;
    }

    :global(#minus:hover + #amount-input) {
        border-left-color: var(--color-blue);
    }

    #amount-input:hover + #plus {
        border-left-color: var(--color-blue);
    }

    #recipe-steps {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .hide {
        clip: rect(0, 0, 0, 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
    }
</style>
