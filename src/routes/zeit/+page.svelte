<script lang="ts">
    import { fadeIn, fadeOut } from "$lib/transition";
    import { fmt } from "$lib/intl";
    import Chart from "chart.js/auto";
    import ChartDataLabels from "chartjs-plugin-datalabels";
    import { type ChartComponentLike } from "chart.js";
    import { onMount } from "svelte";
    import { getWeek } from "date-fns";
    import { ForceDirectedGraphController, EdgeLine } from "chartjs-chart-graph";

    class Article {
        uuid: string;
        title: string;
        published: Date;
        department: string;
        authors: string[];
        tags: string[];
        is_multipage: boolean;

        constructor(article: Array<string[] | number | string>) {
            this.uuid = article[0] as string;
            this.title = article[1] as string;
            this.published = new Date((article[2] as number) * 1000);
            this.department = article[3] as string;
            this.authors = article[4] as string[];
            this.tags = article[5] as string[];
            this.is_multipage = Boolean(article[6] as number);
        }
    }

    interface Node {
        id: string;
        count: number;
    }

    interface Link {
        source: number;
        target: number;
        strength: number;
    }

    let finishedLoading = false;
    let chartTime: HTMLCanvasElement;
    let chartDepartments: HTMLCanvasElement;
    let chartTags: HTMLCanvasElement;

    function week(date: Date) {
        return `${date.getFullYear()}-${getWeek(date)}`;
    }

    async function main() {
        const res = await fetch("https://avitrano.ddns.net:25565");
        const data = await res.json();
        const articles: Article[] = [];
        for (const a of data) {
            articles.push(new Article(a));
        }
        const departments: { [key: string]: number } = {};
        const times: { [key: string]: number } = {};
        const tag_data: { nodes: Node[]; links: Link[] } = {
            nodes: [],
            links: [],
        };

        for (const article of articles) {
            const w = week(article.published);
            if (times[w]) {
                times[w]++;
            } else {
                times[w] = 1;
            }
            if (departments[article.department]) {
                departments[article.department]++;
            } else {
                departments[article.department] = 1;
            }

            for (const tag of article.tags) {
                if (tag === "" || tag === "Aktuelle Themen") {
                    continue;
                }
                let t = tag_data.nodes.find((node) => node.id === tag);
                if (!t) {
                    t = { id: tag, count: 1 };
                    tag_data.nodes.push(t);
                } else {
                    t.count++;
                }
            }
            const combinations = article.tags.flatMap((v, i) => article.tags.slice(i + 1).map((w) => [v, w]));
            for (const combination of combinations) {
                if (combination[0] === "Aktuelle Themen" || combination[1] === "Aktuelle Themen") {
                    continue;
                }
                const left = tag_data.nodes.findIndex((tag) => tag.id === combination[0]);
                const right = tag_data.nodes.findIndex((tag) => tag.id === combination[1]);
                if (left === -1 || right === -1) {
                    console.warn("node not found!", combination);
                    continue;
                }
                let link = tag_data.links.find(
                    (link) =>
                        (link.source === left && link.target === right) ||
                        (link.source === right && link.target === left),
                );
                if (!link) {
                    link = { source: left, target: right, strength: 1 };
                    tag_data.links.push(link);
                } else {
                    link.strength++;
                }
            }
        }
        console.info(tag_data);

        const sortedDepartments = Object.fromEntries(Object.entries(departments).sort(([, a], [, b]) => b - a));

        const zoomPlugin = (await import("chartjs-plugin-zoom")).default as unknown as ChartComponentLike;
        Chart.register(ChartDataLabels, ForceDirectedGraphController, EdgeLine, zoomPlugin);
        Chart.defaults.backgroundColor = "#00000000";
        Chart.defaults.borderColor = "#8c8c8c";
        Chart.defaults.color = "#ffffff";

        new Chart(chartTime, {
            type: "line",
            data: {
                labels: Object.keys(times),
                datasets: [
                    {
                        label: "Times",
                        data: Object.values(times),
                        backgroundColor: "#6496f08c",
                        borderColor: "#6496f0",
                        cubicInterpolationMode: "monotone",
                        tension: 0.4,
                        fill: "origin",
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
        new Chart(chartDepartments, {
            type: "bar",
            data: {
                labels: Object.keys(sortedDepartments),
                datasets: [
                    {
                        label: "Departments",
                        data: Object.values(sortedDepartments),
                        backgroundColor: "#6496f0",
                        borderColor: "#6496f0",
                    },
                ],
            },
        });
        new Chart(chartTags, {
            type: "forceDirectedGraph",
            data: {
                labels: tag_data.nodes.map((x) => x.id),
                datasets: [
                    {
                        label: "Tags",
                        data: tag_data.nodes,
                        edges: tag_data.links,
                        pointRadius: (ctx) => {return Math.log(tag_data.nodes[ctx.dataIndex].count) * 1.5 + 3;},
                        backgroundColor: "#6496f0",
                        borderColor: "#ffffff00",
                    },
                ],
            },
            options: {
                plugins: {
                    datalabels: {
                        display: false,
                    },
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                            },
                            pinch: {
                                enabled: true,
                            },
                        },
                        pan: {
                            enabled: true,
                        },
                    },
                },
                simulation: {
                    forces: {
                        link: {
                            // @ts-ignore
                            strength: () => (link, i) => {
                                return tag_data.links[i].strength / 20;
                            },
                        },
                    },
                },
            },
        });
        finishedLoading = true;
    }

    onMount(() => {
        main();
    });
</script>

<svelte:head>
    <title>{$fmt("zeit.title")}</title>
</svelte:head>

<main in:fadeIn out:fadeOut>
    <h1>{$fmt("zeit.title")}</h1>
    {#if !finishedLoading}
        <p>Loading...</p>
    {/if}
    <canvas bind:this={chartTags}></canvas>
    <canvas bind:this={chartTime}></canvas>
    <canvas bind:this={chartDepartments}></canvas>
</main>

<style>
    main {
        width: 90dvw;
    }
</style>
