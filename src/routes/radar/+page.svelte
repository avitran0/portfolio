<script lang="ts">
    import { fmt } from "$lib/intl";
    import { fadeIn, fadeOut } from "$lib/transition";
    import { onMount } from "svelte";

    enum Team {
        Spectator = 1,
        T = 2,
        CT = 3,
    }

    const Colors = {
        0: "var(--color-blue)",
        1: "var(--color-green)",
        2: "var(--color-yellow)",
        3: "var(--color-orange)",
        4: "var(--color-purple)",
        5: "var(--color-text)",
    };

    interface Player {
        name: string;
        health: number;
        armor: number;
        money: number;
        team: number;
        life_state: number;
        weapon: String;
        color: number;
        position: Vec3;
        steam_id: number;
        active_player: boolean;
    }

    interface Vec3 {
        x: number;
        y: number;
        z: number;
    }

    function startWS() {
        const ws = new WebSocket("ws://127.0.0.1:9001");
        ws.onmessage = wsMessage;
    }

    let players: Player[] = [];

    function wsMessage(event: MessageEvent) {
        try {
            const new_players: Player[] = JSON.parse(event.data);
            //console.log(new_players);
            players = new_players;
        } catch (error) {
            console.warn(error);
        }
    }

    onMount(() => {
        startWS();
    });
</script>

<svelte:head>
    <title>{$fmt("radar.title")}</title>
</svelte:head>

<main in:fadeIn out:fadeOut>
    {#each players.filter((player) => player.team === Team.T) as player}
        <div>
            <h2>{player.name}</h2>
        </div>
    {/each}
</main>

<style>
    main {
        position: fixed;
        width: 100dvw;
        height: 100dvh;
        top: 0;
        left: 0;
        background-color: var(--color-backdrop);
    }
</style>
