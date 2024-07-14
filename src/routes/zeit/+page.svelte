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
        textLength: number;

        constructor(article: Array<string[] | number | string>) {
            this.uuid = article[0] as string;
            this.title = article[1] as string;
            this.publishTime = new Date((article[2] as number) * 1000);
            this.topic = article[3] as string;
            this.authors = article[4] as string[];
            this.tags = article[5] as string[];
            this.isMultipage = Boolean(article[6] as number);
            this.textLength = article[7] as number;
        }
    }

    interface Node {
        id: string;
        count: number;
        topics: Record<string, number>;
    }

    interface Link {
        id: string;
        source: string;
        target: string;
        strength: number;
    }

    const DISABLE_AT = true;
    const AT = "Aktuelle Themen";

    const RELEVANT_TOPICS = 10;

    let chartPublishWeeks: HTMLCanvasElement;
    let chartPublishWeeksTopics: HTMLCanvasElement;
    let chartTextLengthTopics: HTMLCanvasElement;
    let chartPublishTimesTopics: HTMLCanvasElement;

    let chartsStacked = true;
    const TENSION = 0.5;

    const lineCharts: Record<string, Chart<"line", number[], string>> = {};
    const barCharts: Record<string, Chart<"bar", number[], string>> = {};

    function week(date: Date) {
        // 1 is monday, 0 is sunday
        return `${date.getFullYear()}-${getWeek(date, { weekStartsOn: 1 })}`;
    }

    const BORDER_COLORS = ["#6496f0", "#f06464", "#a0f082", "#f08c5a", "#b478f0", "#f0c878", "#50c8c8"];
    const BACKGROUND_COLORS = [
        "#6496f07f",
        "#f064647f",
        "#a0f0827f",
        "#f08c5a7f",
        "#b478f07f",
        "#f0c8787f",
        "#50c8c87f",
    ];
    function getBorderColor(i: number) {
        return BORDER_COLORS[i % BORDER_COLORS.length];
    }
    function getBackgroundColor(i: number) {
        return BACKGROUND_COLORS[i % BACKGROUND_COLORS.length];
    }

    async function main() {
        let prev_time = performance.now();
        console.info("fetching data...");
        const res = await fetch("https://avitrano.ddns.net:8000");
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
        const textLengthTopics: Record<string, number[]> = {};
        const topicCountsTimes: Record<string, Record<string, number>> = {};

        for (const article of articles) {
            const w = week(article.publishTime);
            const hour = article.publishTime.getHours().toString();
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

            if (article.topic in textLengthTopics) {
                textLengthTopics[article.topic].push(article.textLength);
            } else {
                textLengthTopics[article.topic] = [article.textLength];
            }

            if (article.topic in topicCountsTimes) {
                if (hour in topicCountsTimes[article.topic]) {
                    topicCountsTimes[article.topic][hour]++;
                } else {
                    topicCountsTimes[article.topic][hour] = 1;
                }
            } else {
                topicCountsTimes[article.topic] = { [hour]: 1 };
            }

            // nodes and links
            for (const tag of article.tags) {
                if ((DISABLE_AT && tag === AT) || tag === "") {
                    continue;
                }
                let node = tag_data.nodes.find((node) => node.id === tag);
                if (node) {
                    node.count++;
                } else {
                    const new_node = { id: tag, count: 1, topics: { [article.topic]: 1 } };
                    tag_data.nodes.push(new_node);
                }

                const combinations = article.tags.flatMap((v, i) => article.tags.slice(i + 1).map((w) => [v, w]));
                for (const [tag1, tag2] of combinations) {
                    if (DISABLE_AT && (tag1 === AT || tag2 === AT)) {
                        continue;
                    }
                    let link = tag_data.links.find(
                        (link) =>
                            (link.source === tag1 && link.target === tag2) ||
                            (link.source === tag2 && link.target === tag1),
                    );
                    if (link) {
                        link.strength++;
                    } else {
                        const new_link = { id: tag1 + tag2, source: tag1, target: tag2, strength: 1 };
                        tag_data.links.push(new_link);
                    }
                }
            }
        }
        // end article loop

        if ("video" in topicCounts) {
            delete topicCounts["video"];
        }
        const relevantTopics = Object.entries(topicCounts)
            .sort((a, b) => b[1] - a[1])
            .flatMap((val) => val[0])
            .slice(0, RELEVANT_TOPICS);

        const averageTextLengths = Object.fromEntries(
            Object.entries(textLengthTopics)
                .map(([key, value]) => [key, Math.round(value.reduce((a, b) => a + b) / value.length)])
                // @ts-ignore
                .sort(([, a], [, b]) => a - b),
        );
        Object.keys(averageTextLengths).forEach((key) => {
            if (!relevantTopics.includes(key)) {
                delete averageTextLengths[key];
            }
        });

        t = performance.now();
        console.info(`done in ${(t - prev_time).toLocaleString()}ms`);
        prev_time = t;
        console.info("creating graphs...");

        setChartDefaults();

        lineCharts["publish-weeks"] = new Chart(chartPublishWeeks, {
            type: "line",
            data: {
                labels: Object.keys(publishWeeks),
                datasets: [
                    {
                        data: Object.values(publishWeeks),
                        fill: true,
                        cubicInterpolationMode: "monotone",
                        tension: TENSION,
                        borderColor: getBorderColor(0),
                        backgroundColor: getBackgroundColor(0),
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
        lineCharts["publish-weeks-topics"] = new Chart(chartPublishWeeksTopics, {
            type: "line",
            data: {
                labels: Object.keys(publishWeeks),
                datasets: relevantTopics.map((topic, index) => {
                    return {
                        label: topic,
                        data: Object.values(publishWeeksTopics[topic]),
                        fill: chartsStacked,
                        cubicInterpolationMode: "monotone",
                        tension: TENSION,
                        borderColor: getBorderColor(index),
                        backgroundColor: getBackgroundColor(index),
                    };
                }),
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        stacked: chartsStacked,
                    },
                },
            },
        });
        barCharts["text-length-topics"] = new Chart(chartTextLengthTopics, {
            type: "bar",
            data: {
                labels: Object.keys(averageTextLengths),
                datasets: [
                    {
                        label: "",
                        data: Object.values(averageTextLengths),
                        borderColor: getBorderColor(0),
                        backgroundColor: getBorderColor(0),
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                },
            },
        });
        lineCharts["publish-times-topics"] = new Chart(chartPublishTimesTopics, {
            type: "line",
            data: {
                labels: [...Array(24).keys()].map((key) => key.toString()),
                datasets: relevantTopics.map((topic, index) => {
                    return {
                        label: topic,
                        data: Object.values(topicCountsTimes[topic]),
                        fill: chartsStacked,
                        cubicInterpolationMode: "monotone",
                        tension: TENSION,
                        borderColor: getBorderColor(index),
                        backgroundColor: getBackgroundColor(index),
                    };
                }),
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        stacked: chartsStacked,
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

        // intersection
        // Chart.defaults.interaction.intersect = false;
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
    <h2>{$fmt("zeit.chart-text-length-topics")}</h2>
    <canvas bind:this={chartTextLengthTopics}></canvas>
    <h2>{$fmt("zeit.chart-publish-times-topics")}</h2>
    <canvas bind:this={chartPublishTimesTopics}></canvas>
    <button
        id="stack-button"
        on:click={() => {
            const chartsToChange = [lineCharts["publish-weeks-topics"], lineCharts["publish-times-topics"]];
            if (chartsStacked) {
                for (const chart of chartsToChange) {
                    // @ts-ignore
                    chart.options.scales.y.stacked = false;
                    chart.data.datasets.forEach((dataset) => {
                        dataset.fill = false;
                    });
                }
            } else {
                for (const chart of chartsToChange) {
                    // @ts-ignore
                    chart.options.scales.y.stacked = true;
                    chart.data.datasets.forEach((dataset) => {
                        dataset.fill = true;
                    });
                }
            }
            chartsToChange.forEach((chart) => chart.update());
            chartsStacked = !chartsStacked;
        }}>Toggle Stacked</button>
</main>

<style>
    main {
        max-width: min(90dvw, 64rem);
        width: 100%;
    }

    #stack-button {
        position: fixed;
        top: 1rem;
    }
</style>
