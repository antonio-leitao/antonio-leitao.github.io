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
            <div class="about">
                Here's a list of all my submitted research papers.<br />
            </div>
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
    width: 100%;
    min-height: 88vh;
    padding: 3rem 2rem;
}

.container {
    max-width: 46rem;
    margin: 0 auto;
}

.header {
    margin-bottom: 1.5rem;
}

.about {
    font-size: 1.3rem;
    font-weight: 200;
    text-align: center;
    margin: 3rem 0rem;
}

/* ── Topic-grouped timeline ── */
.timeline {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
}

.year-group {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.tag-pill span {
    display: inline-block;
    font-size: 0.8rem;
    color: var(--subtext);
    padding: 0.15rem 0rem;
}

.year-papers {
    flex: 1;
    border-left: 1.5px solid var(--highlight);
    padding-left: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

@media (max-width: 600px) {
    .research {
        padding: 2rem 1.25rem;
    }

    .container {
        max-width: 100%;
    }
}
</style>
