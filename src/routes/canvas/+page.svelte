<script lang="ts">
    import { fade } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import { onMount } from "svelte";

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;

    let color = "";

    function resize() {
        canvas.width = window.innerWidth * window.devicePixelRatio;
        canvas.height = window.innerHeight * window.devicePixelRatio;
    }

    function draw(time: number) {
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

<svelte:window on:resize={resize} />

<main in:fade={{ delay: 200, duration: 200, easing: cubicOut }} out:fade={{ duration: 200, easing: cubicOut }}>
    <h1>Canvas</h1>
    <canvas bind:this={canvas}></canvas>
</main>

<style>
    :global(body) {
        overflow: hidden;
    }

    canvas {
        position: absolute;
        top: 0;
        left: 0;
        width: 100dvw;
        height: 100dvh;
    }
</style>
