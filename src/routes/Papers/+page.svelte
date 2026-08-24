<script>
    import { flip } from "svelte/animate";
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import Paper from "./Paper.svelte";
    export let data;

    function groupByTopic(papers) {
        const groups = {};
        for (const paper of papers) {
            const y = paper.tag;
            if (!groups[y]) groups[y] = [];
            groups[y].push(paper);
        }
        return Object.keys(groups)
            .map((tag) => ({ tag, papers: groups[tag] }));
    }
    $: grouped = groupByTopic(data.papers);
</script>

<svelte:head>
    <title>António Leitão • Publications</title>
    <meta name="description" content="List of publications" />
</svelte:head>

<section class="research">
    <div class="container">
        <div class="header">
            <h1>Research</h1>
            <p>
                I'm interested in porting the concepts of topology into data analysis and machine learning. Developing the theory and the computational algorithms for high performance implementations.
            </p>
        </div>


<div class="timeline">
    {#each grouped as group (group.tag)}
        <div class="year-group">
            <div class="tag-pill">
                <span>{group.tag}</span>
            </div>
            <div class="year-papers">
                {#each group.papers as paper, i (paper.title)}
                    <div
                        class="paper-entry"
                        in:fly={{
                            duration: 200,
                            y: -20,
                            delay: i * 50,
                            easing: quintOut,
                        }}
                        animate:flip={{
                            duration: 200,
                            easing: quintOut,
                        }}
                    >
                        <Paper
                            highlightAuthor={paper.index}
                            authors={paper.authors}
                            title={paper.title}
                            url={paper.url}
                            venue={paper.venue}
                            year={paper.year}
                        />
                    </div>
                {/each}
            </div>
        </div>
    {/each}
</div>
    </div>
</section>

<style>
.research {
    /* width of the year rail; the mobile rule below narrows it */
    --rail: 53px;
    width: 100%;
    min-height: 88vh;
    /* shared with Projects so both headers start at the same height */
    padding: 3.5rem 2rem 3rem;
}

.container {
    max-width: 46rem;
    margin: 0 auto;
}

.header {
    margin: 0 0 2.5rem;
}

.header h1 {
    font-family: "Lora", serif;
    font-weight: 700;
    font-size: 1.6rem;
    letter-spacing: -0.01em;
    line-height: 1.25;
    color: var(--hover);
    margin-bottom: 0.75rem;
}

.header p {
    font-size: 0.9rem;
    line-height: 1.62;
    color: var(--muted);
    max-width: 48ch;
    text-wrap: pretty;
}

/* ── Topic-grouped timeline ── */
.timeline {
    display: flex;
    flex-direction: column;
    gap: 2.25rem;
}

.year-group {
    display: flex;
    flex-direction: column;
}

.tag-pill {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    margin-bottom: 1rem;
}

.tag-pill::after {
    content: "";
    flex: 1;
    height: 1px;
    background: #e0e2e3;
}

.tag-pill span {
    font-family: "Lora", serif;
    font-weight: 400;
    font-size: 1.06rem;
    line-height: 1.3;
    color: var(--hover);
    padding: 0;
}

.year-papers {
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
}

/* the hairline is drawn rather than bordered, so it stays unbroken while the
   entries below are a grid */
.year-papers::before {
    content: "";
    position: absolute;
    left: var(--rail);
    top: 0;
    bottom: 0;
    width: 1.5px;
    background: var(--highlight);
}

/* year and title are grid siblings so the browser aligns their baselines,
   whatever the two fonts' metrics happen to be */
.paper-entry {
    display: grid;
    grid-template-columns: var(--rail) minmax(0, 1fr);
    align-items: baseline;
}

@media (max-width: 600px) {
    .research {
        --rail: 40px;
        padding: 2.5rem 1.25rem 2rem;
    }

    .container {
        max-width: 100%;
    }

    .header {
        margin: 0 0 2rem;
    }

    .header h1 {
        font-size: 1.4rem;
    }
}
</style>
