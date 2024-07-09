<script lang="ts">
    import { fmt } from "$lib/intl";
    import { fadeIn, fadeOut } from "$lib/transition";
    import { onMount } from "svelte";
    import Chart from "chart.js/auto";
    import { getWeek } from "date-fns";

    class Article {
        uuid: string;
        title: string;
        publishTime: Date;
        topic: string;
        authors: string[];
        tags: string[];
        isMultipage: boolean;

        constructor(article: Array<string[] | number | string>) {
            this.uuid = article[0] as string;
            this.title = article[1] as string;
            this.publishTime = new Date((article[2] as number) * 1000);
            this.topic = article[3] as string;
            this.authors = article[4] as string[];
            this.tags = article[5] as string[];
            this.isMultipage = Boolean(article[6] as number);
        }
    }

    interface Node {
        id: string;
        count: number;
        departments: Record<string, number>;
    }

    interface Link {
        source: string;
        target: string;
        strength: number;
    }

    const DISABLE_AT = true;
    const AT = "Aktuelle Themen";

    const RELEVANT_TOPICS = 10;

    let chartPublishWeeks: HTMLCanvasElement;
    let chartPublishWeeksTopics: HTMLCanvasElement;

    const charts: Record<string, Chart> = {};

    function week(date: Date) {
        // 1 is monday, 0 is sunday
        return `${date.getFullYear()}-${getWeek(date, { weekStartsOn: 1 })}`;
    }

    async function main() {
        let prev_time = performance.now();
        console.info("fetching data...");
        const res = await fetch("https://avitrano.ddns.net:25565");
        const data = await res.json();
        const articles: Article[] = [];
        for (const a of data) {
            articles.push(new Article(a));
        }
        let t = performance.now();
        console.info(`done in ${(t - prev_time).toLocaleString()}ms`);
        prev_time = t;
        console.info("processing data...");

        const tag_data: { nodes: Node[]; links: Link[] } = {
            nodes: [],
            links: [],
        };

        const publishWeeks: Record<string, number> = {};
        // { topic: { week: count }}
        const publishWeeksTopics: Record<string, Record<string, number>> = {};
        const topicCounts: Record<string, number> = {};

        for (const article of articles) {
            const w = week(article.publishTime);
            if (w in publishWeeks) {
                publishWeeks[w]++;
            } else {
                publishWeeks[w] = 1;
            }

            if (article.topic in publishWeeksTopics) {
                if (w in publishWeeksTopics[article.topic]) {
                    publishWeeksTopics[article.topic][w]++;
                } else {
                    publishWeeksTopics[article.topic][w] = 1;
                }
            } else {
                publishWeeksTopics[article.topic] = { [w]: 1 };
            }

            if (article.topic in topicCounts) {
                topicCounts[article.topic]++;
            } else {
                topicCounts[article.topic] = 1;
            }
        }

        const relevantTopics = Object.entries(topicCounts)
            .sort((a, b) => b[1] - a[1])
            .flatMap((val) => val[0])
            .slice(0, RELEVANT_TOPICS);

        // end article loop
        t = performance.now();
        console.info(`done in ${(t - prev_time).toLocaleString()}ms`);
        prev_time = t;
        console.info("creating graphs...");

        setChartDefaults();

        charts["publish-weeks"] = new Chart(chartPublishWeeks, {
            type: "line",
            data: {
                labels: Object.keys(publishWeeks),
                datasets: [
                    {
                        data: Object.values(publishWeeks),
                        fill: true,
                        cubicInterpolationMode: "monotone",
                        // todo: better tension?
                        tension: 0.2,
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
        charts["publish-weeks-topics"] = new Chart(chartPublishWeeksTopics, {
            type: "line",
            data: {
                labels: Object.keys(publishWeeks),
                datasets: relevantTopics.map((topic) => {
                    return {
                        label: topic,
                        data: Object.values(publishWeeksTopics[topic]),
                        // todo: switch for fill option
                        fill: false,
                        cubicInterpolationMode: "monotone",
                        // todo: better tension?
                        tension: 0.2,
                    };
                }),
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        // todo: switch for stacked option
                        stacked: false,
                    },
                },
            },
        });

        t = performance.now();
        console.info(`done in ${(t - prev_time).toLocaleString()}ms`);
        prev_time = t;
    }

    function setChartDefaults() {
        // font
        Chart.defaults.font.family = "JetBrainsMono";
        Chart.defaults.font.size = 16;

        // colors
        Chart.defaults.color = "#ffffff";
        Chart.defaults.borderColor = "#ffffff1e";

        // point styling
        Chart.defaults.elements.point.radius = 5;
        Chart.defaults.elements.point.hoverRadius = 5;
        Chart.defaults.elements.point.hitRadius = 3;
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
    <h2>{$fmt("zeit.chart-publish-weeks")}</h2>
    <canvas bind:this={chartPublishWeeks}></canvas>
    <h2>{$fmt("zeit.chart-publish-weeks-topics")}</h2>
    <canvas bind:this={chartPublishWeeksTopics}></canvas>
</main>

<style>
    main {
        max-width: min(90dvw, 64rem);
        width: 100%;
    }
</style>
