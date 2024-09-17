<script lang="ts">
    import { fmt } from "$lib/intl";
    import { fadeIn, fadeOut } from "$lib/transition";
    import { onDestroy, onMount } from "svelte";
    import { MapData } from "./mapdata";
    import type { Player } from "./player";
    import PlayerDot from "./PlayerDot.svelte";
    import PlayerInfo from "./PlayerInfo.svelte";
    import { WeaponCategories } from "./weapons";

    enum Team {
        Spectator = 1,
        T = 2,
        CT = 3,
    }

    let ws: WebSocket | null = null;
    let wsConnected = false;

    function startWS() {
        stopWS();

        ws = new WebSocket(`ws://localhost:9001`);
        ws.onmessage = wsMessage;
        ws.onopen = () => {
            wsConnected = true;
            console.info("websocket connection established");
        };
        ws.onclose = () => {
            wsConnected = false;
            console.info("websocket connection closed");
        };
        ws.onerror = () => {
            wsConnected = false;
            console.info("websocket could not connect");
        };
    }

    function stopWS() {
        ws?.close();
        ws = null;
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

        setInterval(() => {
            if (ws && ws.readyState !== 1) {
                startWS();
            }
        }, 1000);

        const mapStorage = localStorage.getItem("map");
        const radarTypeStorage = localStorage.getItem("radarType");
        if (mapStorage && radarTypeStorage) {
            map = mapStorage;
            radarType = radarTypeStorage;
            changeMap();
        } else {
            localStorage.setItem("map", map);
            localStorage.setItem("radarType", radarType);
        }
    });

    onDestroy(stopWS);

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
    <div class="status">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class={wsConnected ? "connected" : "disconnected"}>
            <path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z" />
            <path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z" />
            <path d="M3 21l2.5 -2.5" />
            <path d="M18.5 5.5l2.5 -2.5" />
            <path d="M10 11l-2 2" />
            <path d="M13 14l-2 2" />
        </svg>
    </div>
    <select bind:value={map} on:change={changeMap}>
        <option value="de_ancient">Ancient</option>
        <option value="de_dust2">Dust 2</option>
        <option value="de_inferno">Inferno</option>
        <option value="de_mirage">Mirage</option>
        <option value="de_nuke">Nuke</option>
        <option value="de_overpass">Overpass</option>
        <option value="de_vertigo">Vertigo</option>
    </select>
    <select
        bind:value={radarType}
        on:change={() => {
            localStorage.setItem("radarType", radarType);
        }}>
        <option value="clean">Clean</option>
        <option value="callouts">Callouts</option>
        <option value="elevations">Elevations</option>
        <option value="both">Both</option>
    </select>
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
                friendly={player.team === activePlayer.team}
                sameLevel={radarLayer ===
                    (mapData.lowerThreshold && player.position.z < mapData.lowerThreshold
                        ? MapLayers.Lower
                        : MapLayers.Default)} />
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
        gap: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding-top: 1rem;
        flex-wrap: wrap;
    }
    select {
        color: var(--color-text);
        background-color: var(--color-highlight);
        border: var(--border-text);
        border-radius: 0.5rem;
        font-family: var(--font-jetbrains-mono);
        font-size: var(--font-size-small);
        padding: 0.2rem 0.5rem;
        height: 2.4rem;
    }

    select {
        cursor: pointer;
    }

    select:hover {
        border-color: var(--color-blue);
    }

    select:focus {
        outline: none;
        border-color: var(--color-blue);
    }

    .status {
        border: var(--border-text);
        border-radius: 0.5rem;
        font-family: var(--font-jetbrains-mono);
        font-size: var(--font-size-small);
        padding: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 2.4rem;
        width: 2.4rem;
    }

    .status > svg {
        width: 100%;
        height: 100%;
    }

    svg.connected {
        stroke: var(--color-green);
    }

    svg.disconnected {
        stroke: var(--color-red);
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
