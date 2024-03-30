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
    <a href="/recipes" id="back">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
        </svg>
    </a>
    <h1>{recipe.name}</h1>
    <div class="table">
        <h2>Ingredient</h2>
        <h2>Amount</h2>
        {#each recipe.ingredients as ingredient}
            <p>{ingredient.name}</p>
            <p>{ingredient.amount}{ingredient.unit}</p>
        {/each}
    </div>
    <div id="amount-container">
        <button
            id="minus"
            on:click={() => (amount <= 1 ? (amount = 1) : amount--)}
            aria-label="Decrement selected item amount">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M5 12l14 0" />
            </svg>
        </button>
        <label for="amount-input" class="hide">Enter Item amount</label>
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
    <h2>Steps</h2>
    {#each recipe.steps as step, i}
        <p>{i + 1}: {step}</p>
    {/each}
</main>

<style>
    #back {
        position: absolute;
        top: 1rem;
        left: 4.4rem;
        border: var(--border-text);
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #back:hover {
        border-color: var(--color-blue);
    }

    #back svg {
        width: 100%;
        height: 100%;
    }

    .table {
        display: grid;
        grid-template-columns: 1fr 1fr;
        border-radius: 0.5rem;
        border: var(--border-text);
        text-align: left;
    }

    .table h2,
    .table p {
        padding: 0.2rem 0.5rem;
        font-size: var(--font-size-medium);
    }

    .table h2 {
        border-bottom: 1px solid var(--color-text);
    }

    .table h2:first-child {
        border-right: 1px solid var(--color-text);
    }

    .table h2:nth-child(2) {
        border-left: 1px solid var(--color-text);
    }

    .table p {
        border: 1px solid var(--color-text);
    }

    .table p:nth-child(odd) {
        border-left: none;
    }

    .table p:nth-child(even) {
        border-right: none;
    }

    .table p:last-child,
    .table p:nth-last-child(2) {
        border-bottom: none;
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

    .hide {
        clip: rect(0, 0, 0, 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
    }
</style>
