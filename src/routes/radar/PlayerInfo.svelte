<script lang="ts">
    import { getColor } from "./color";
    import type { Player } from "./player";

    export let player: Player;

    const BLUE_FILTER =
        "brightness(0) saturate(100%) invert(57%) sepia(30%) saturate(2260%) hue-rotate(195deg) brightness(97%) contrast(94%)";

    function getPingColor(ping: number) {
        if (ping <= 50) {
            return "green";
        } else if (ping <= 100) {
            return "yellow";
        }
        return "red";
    }
</script>

<div class="player gap-small" style="border-color: {getColor(player.color)}; opacity: {player.health > 0 ? 1 : 0.5};">
    <div class="horizontal gap">
        <div class="horizontal">
            <img src="/icons/health.svg" alt="health" />
            <p style="color: var(--color-green);">{player.health}</p>
        </div>
        <div class="horizontal">
            <img src="/icons/armor.svg" alt="armor" />
            <p style="color: var(--color-blue);">{player.armor}</p>
        </div>
        <div class="horizontal">
            <img src="/icons/money.svg" alt="money" />
            <p style="color: var(--color-yellow);">{player.money}</p>
        </div>
        <div class="horizontal">
            <img src="/icons/ping.svg" alt="ping" />
            <p style="color: var(--color-{getPingColor(player.ping)});">{player.ping}</p>
        </div>
    </div>
    <div class="horizontal gap-small">
        {#each player.weapons as weapon}
            <img
                src={`/icons/${weapon}.svg`}
                alt={weapon}
                style="filter: {weapon === player.weapon ? BLUE_FILTER : ''}" />
        {/each}
    </div>
</div>

<style>
    .player {
        border: var(--border-text);
        border-radius: 0.5rem;
        padding: 0.5rem;
        display: flex;
        flex-direction: column;
        font-family: var(--font-jetbrains-mono);
        font-size: var(--font-size-medium);
        width: 100%;
    }

    .horizontal {
        display: flex;
        flex-direction: row;
        gap: 0.2rem;
    }

    .gap {
        gap: 1rem;
    }

    .gap-small {
        gap: 0.5rem;
    }

    img {
        max-width: 4rem;
        max-height: 2rem;
        transition: none;
    }
</style>
