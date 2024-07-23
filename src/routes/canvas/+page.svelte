<script lang="ts">
    import { fmt } from "$lib/intl";
    import { fadeIn, fadeOut } from "$lib/transition";
    import { onMount } from "svelte";

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;

    let color = "";

    function resize() {
        if (!canvas) return;
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
    }

    function draw(time: number) {
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = color;

        const barWidth = 16;
        const barHeight = 200;
        const barSpacing = 4;
        const barCount = Math.floor(canvas.width / (barWidth + barSpacing));
        const firstBarOffset = (canvas.width - (barCount * barWidth + (barCount - 1) * barSpacing)) / 2;
        for (let i = 0; i < barCount; i++) {
            const x = firstBarOffset + i * (barWidth + barSpacing);
            const height = Math.cos(time / 350 + i * 3) * barHeight;
            ctx.fillRect(x, canvas.height / 2 - height / 2 - barHeight / 2, barWidth, barHeight);
        }
        requestAnimationFrame(draw);
    }

    onMount(() => {
        ctx = canvas.getContext("2d")!;
        color = getComputedStyle(document.documentElement).getPropertyValue("--color-text");
        resize();
        requestAnimationFrame(draw);
    });
</script>

<svelte:head>
    <title>{$fmt("canvas.title")}</title>
</svelte:head>

<svelte:window on:resize={resize} />

<main in:fadeIn out:fadeOut>
    <h1>{$fmt("canvas.title")}</h1>
    <canvas bind:this={canvas}></canvas>
</main>

<style>
    canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100dvw;
        height: 100dvh;
    }
</style>
