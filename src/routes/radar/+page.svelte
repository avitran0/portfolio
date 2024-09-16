<script lang="ts">
    import { fmt } from "$lib/intl";
    import { fadeIn, fadeOut } from "$lib/transition";
    import { onMount } from "svelte";
    import type { Player } from "./player";
    import PlayerInfo from "./PlayerInfo.svelte";
    import { WeaponCategories } from "./weapons";
    import { MapData } from "./mapdata";
    import PlayerDot from "./PlayerDot.svelte";

    enum Team {
        Spectator = 1,
        T = 2,
        CT = 3,
    }

    let ip: string = "localhost";
    let port: number = 9001;

    let ws: WebSocket;
    let reconnectTimeout: NodeJS.Timeout;
    let wsConnected = false;

    function startWS() {
        try {
            ws = new WebSocket(`ws://${ip}:${port}`);
        } catch (error) {
            return;
        }
        ws.onmessage = wsMessage;
        ws.onopen = () => {
            wsConnected = true;
        };
        ws.onclose = () => {
            wsConnected = false;
            reconnectTimeout = setTimeout(startWS, 1000);
        };
    }

    function stopWS() {
        ws.close();
        clearTimeout(reconnectTimeout);
    }

    function restartWS() {
        stopWS();
        startWS();
    }

    let players: Player[] = [];
    let activePlayer: Player;

    function wsMessage(event: MessageEvent) {
        let new_players: Player[] = [];
        try {
            new_players = JSON.parse(event.data);
        } catch (error) {
            //console.warn(error);
            return;
        }
        if (new_players.length === 0) {
            players = [];
            return;
        }
        for (const player of new_players) {
            player.weapons.sort((a, b) => {
                const catA = WeaponCategories[a];
                const catB = WeaponCategories[b];

                if (catA === catB) {
                    return a.localeCompare(b);
                }

                return catA - catB;
            });
            if (player.active_player) {
                activePlayer = player;
            }
        }
        if (mapData.lowerThreshold) {
            radarLayer = activePlayer?.position.z < mapData.lowerThreshold ? MapLayers.Lower : MapLayers.Default;
        } else {
            radarLayer = MapLayers.Default;
        }

        players = new_players;
    }

    function changeMap() {
        mapData = MapData[map];
        localStorage.setItem("map", map);
    }

    onMount(() => {
        startWS();
        let mapStorage = localStorage.getItem("map");
        if (mapStorage) {
            map = mapStorage;
            changeMap();
        } else {
            localStorage.setItem("map", map);
        }
    });

    enum MapLayers {
        Default,
        Lower,
    }

    const RadarTypes: Record<string, string> = {
        Clean: "clean",
        Callouts: "callouts",
        Elevations: "elevations",
        Both: "both",
    };

    let radar: HTMLDivElement;
    let map: string = "de_ancient";
    let mapData = MapData[map];
    let radarType = RadarTypes.Clean;
    let radarLayer = MapLayers.Default;
</script>

<svelte:head>
    <title>{$fmt("radar.title")}</title>
</svelte:head>

<header in:fadeIn out:fadeOut>
    <label>
        IP
        <input type="text" bind:value={ip} on:input={restartWS} />
    </label>
    <label>
        Port
        <input type="number" bind:value={port} on:input={restartWS} />
    </label>
    <select bind:value={map} on:change={changeMap}>
        <option value="de_ancient">Ancient</option>
        <option value="de_dust2">Dust 2</option>
        <option value="de_inferno">Inferno</option>
        <option value="de_mirage">Mirage</option>
        <option value="de_nuke">Nuke</option>
        <option value="de_overpass">Overpass</option>
        <option value="de_vertigo">Vertigo</option>
    </select>
    <select bind:value={radarType}>
        <option value="clean">Clean</option>
        <option value="callouts">Callouts</option>
        <option value="elevations">Elevations</option>
        <option value="both">Both</option>
    </select>
    <div class="status" style="background-color: var(--color-{wsConnected ? 'green' : 'red'});">WebSocket</div>
</header>
<main in:fadeIn out:fadeOut>
    <div class="data">
        <h1 id="t">T</h1>
        {#each players.filter((player) => player.team === Team.T) as player}
            <PlayerInfo {player} />
        {/each}
    </div>
    <div
        bind:this={radar}
        id="radar"
        style="background-image: {`url(/radars/${radarType}/${map}${radarLayer === MapLayers.Lower ? '_lower' : ''}.png)`};">
        {#each players.filter((player) => player.health > 0) as player}
            <PlayerDot
                {player}
                position={{
                    x: ((player.position.x - mapData.x) / mapData.scale) * (radar.clientWidth / 1024),
                    y: ((player.position.y - mapData.y) / mapData.scale) * (radar.clientHeight / 1024),
                }}
                friendly={player.team === activePlayer.team} />
        {/each}
    </div>
    <div class="data">
        <h1 id="ct">CT</h1>
        {#each players.filter((player) => player.team === Team.CT) as player}
            <PlayerInfo {player} />
        {/each}
    </div>
</main>

<style>
    header {
        position: absolute;
        top: 0;
        z-index: 2;
        display: flex;
        gap: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-top: 1rem;
    }

    label {
        font-family: var(--font-jetbrains-mono);
        font-size: var(--font-size-medium);
    }

    input,
    select {
        color: var(--color-text);
        background-color: var(--color-highlight);
        border: var(--border-text);
        border-radius: 0.5rem;
        font-family: var(--font-jetbrains-mono);
        font-size: var(--font-size-small);
        padding: 0.2rem 0.5rem;
    }

    select {
        cursor: pointer;
    }

    input:hover,
    select:hover {
        border-color: var(--color-blue);
    }

    input:focus,
    select:focus {
        outline: none;
        border-color: var(--color-blue);
    }

    input[type="number"] {
        width: 8rem;
        appearance: textfield;
    }

    .status {
        color: var(--color-base);
        background-color: var(--color-highlight);
        border: var(--border-text);
        border-radius: 0.5rem;
        font-family: var(--font-jetbrains-mono);
        font-size: var(--font-size-small);
        padding: 0.2rem 0.5rem;
    }

    main {
        position: fixed;
        z-index: 1;
        width: 100dvw;
        height: 100dvh;
        top: 0;
        left: 0;
        background-color: var(--color-base);
        flex-direction: row;
        justify-content: space-evenly;
        gap: 1rem;
        transition: none;
    }

    #radar {
        position: relative;
        aspect-ratio: 1 / 1;
        width: 85dvh;
        background-size: cover;
        border: var(--border-text);
        border-radius: 0.5rem;
    }

    .data {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        min-width: 20rem;
    }

    #t,
    #ct {
        border-radius: 0.5rem;
        color: var(--color-base);
        padding: 0.5rem;
    }

    #t {
        background-color: var(--color-orange);
    }

    #ct {
        background-color: var(--color-blue);
    }

    @media (max-width: 80rem) {
        .data {
            display: none;
        }
    }
</style>
