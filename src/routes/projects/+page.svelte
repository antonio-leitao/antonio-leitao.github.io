<script>
    import Package from "./Package.svelte";
    import Icon from "./Icon.svelte";
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    let ready = false;
    onMount(() => (ready = true));
    export let data;
    let hoveredBox = null;
    // download counts, written by scripts/downloads.mjs at build time
    $: stats = data.stats ?? {};
    export function heavyBounceOut(t) {
        const a = 4.0 / 11.0;
        const b = 8.0 / 11.0;
        const c = 9.0 / 10.0;
        const ca = 4356.0 / 361.0;
        const cb = 35442.0 / 1805.0;
        const cc = 16061.0 / 1805.0;
        const t2 = t * t;
        return t < a
            ? 7.5625 * t2
            : t < b
              ? 9.075 * t2 - 9.9 * t + 3.4
              : t < c
                ? ca * t2 - cb * t + cc
                : 10.8 * t * t - 20.52 * t + 10.72;
    }
    // Randomly distribute boxes into three piles
    const pile1 = [];
    const pile2 = [];
    const pile3 = [];

    data.projects.forEach((box, index) => {
        const pileIndex = index % 3;
        if (pileIndex === 0) pile1.push(box);
        else if (pileIndex === 1) pile2.push(box);
        else pile3.push(box);
    });
    pile1.sort((a, b) => b.size - a.size);
    pile2.sort((a, b) => b.size - a.size);
    pile3.sort((a, b) => b.size - a.size);
</script>

<svelte:head>
    <title>António Leitão • Projects</title>
    <meta name="description" content="List of projects" />
</svelte:head>

<section class="projects">
    <div class="container">
        <div class="header">
            <h1>Projects</h1>
            <p>
                Things I built because I needed them and they did not exist.
                Mostly Rust with Python wrappers.
            </p>
        </div>

        <div class="box-piles">
        <div class="pile">
            {#each pile1 as box, index}
                {#if ready}
                    <div
                        class="box-container"
                        class:hovered={hoveredBox === box}
                        on:mouseenter={() => (hoveredBox = box)}
                        on:mouseleave={() => (hoveredBox = null)}
                        in:fly={{
                            delay: index * 50,
                            duration: index * 50 + 400,
                            y: -50,
                            opacity: 1,
                            easing: heavyBounceOut,
                        }}
                    >
                        <a
                            href={box.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={box.name}
                            ><Package
                                icon={box.icon}
                                size={box.size}
                                shadow={index == 0}
                                open={hoveredBox === box}
                            /></a
                        >
                    </div>
                {/if}
            {/each}
        </div>

        <div class="pile">
            {#each pile2 as box, index}
                {#if ready}
                    <div
                        class="box-container"
                        class:hovered={hoveredBox === box}
                        on:mouseenter={() => (hoveredBox = box)}
                        on:mouseleave={() => (hoveredBox = null)}
                        in:fly={{
                            delay: index * 60,
                            duration: index * 50 + 400,
                            y: -50,
                            opacity: 1,
                            easing: heavyBounceOut,
                        }}
                    >
                        <a
                            href={box.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={box.name}
                            ><Package
                                icon={box.icon}
                                size={box.size}
                                shadow={index == 0}
                                open={hoveredBox === box}
                            /></a
                        >
                    </div>
                {/if}
            {/each}
        </div>

        <div class="pile">
            {#each pile3 as box, index}
                {#if ready}
                    <div
                        class="box-container"
                        class:hovered={hoveredBox === box}
                        on:mouseenter={() => (hoveredBox = box)}
                        on:mouseleave={() => (hoveredBox = null)}
                        in:fly={{
                            delay: index * 80,
                            duration: index * 50 + 400,
                            y: -50,
                            opacity: 1,
                            easing: heavyBounceOut,
                        }}
                    >
                        <a
                            href={box.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={box.name}
                            ><Package
                                icon={box.icon}
                                size={box.size}
                                shadow={index == 0}
                                open={hoveredBox === box}
                            /></a
                        >
                    </div>
                {/if}
            {/each}
        </div>
        </div>

        <div class="manifest">
            {#each data.projects as project}
                <a
                    class="row"
                    class:hovered={hoveredBox === project}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    on:mouseenter={() => (hoveredBox = project)}
                    on:mouseleave={() => (hoveredBox = null)}
                    on:focus={() => (hoveredBox = project)}
                    on:blur={() => (hoveredBox = null)}
                >
                    <span class="glyph">
                        <Icon
                            name={project.icon}
                            color={"#1c2329"}
                            width={"28px"}
                            height={"28px"}
                            fit
                        />
                    </span>
                    <span class="entry">
                        <span class="top">
                            <span class="pname">{project.name}</span>
                            <span class="dl">
                                {#if project.pip && stats[project.pip]}
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.8"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M12 3v12" />
                                        <path d="m7 11 5 5 5-5" />
                                        <path d="M4 20h16" />
                                    </svg>
                                    {stats[project.pip]}
                                {/if}
                            </span>
                        </span>
                        <span class="sum">{project.summary}</span>
                    </span>
                </a>
            {/each}
        </div>
    </div>
</section>

<style>
    .projects {
        width: 100%;
        min-height: 88vh;
        /* shared with Papers so both headers start at the same height */
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

    /* ── the pile ── */
    .box-piles {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap: 3.9rem;
        min-height: 13.5rem;
        margin: 0 0 1.75rem;
    }

    .pile {
        position: relative;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
    }

    .box-container {
        position: relative;
        transition: transform 0.3s ease;
        margin-bottom: -0.75rem;
    }

    /* driven by hoveredBox, so a manifest row lifts the pile too */
    .box-container.hovered ~ .box-container {
        transform: translateY(-30px);
    }

    /* ── the manifest ── */
    .manifest {
        border-top: 1px solid var(--highlight);
        padding-top: 0.35rem;
        display: flex;
        flex-direction: column;
        /* cancel the rows' own padding so their content sits on the header's
           left edge; the hover tint bleeds past the text instead */
        margin: 0 -0.6rem;
    }

    .row {
        display: grid;
        grid-template-columns: 34px minmax(0, 1fr);
        gap: 1rem;
        align-items: center;
        padding: 0.8rem 0.6rem;
        border-radius: 3px;
        color: inherit;
        text-decoration: none;
        transition: background 0.15s ease;
    }

    .row:hover,
    .row.hovered {
        background: #f1ece5;
        text-decoration: none;
    }

    .glyph {
        display: grid;
        place-items: center;
        padding-top: 1px;
    }

    /* name and count share a line; the summary runs full width beneath */
    .entry {
        display: flex;
        flex-direction: column;
        min-width: 0;
    }

    .top {
        display: flex;
        align-items: baseline;
        gap: 1rem;
    }

    .pname {
        font-size: 0.94rem;
        font-weight: 500;
        line-height: 1.4;
        color: var(--hover);
    }

    .sum {
        font-size: 0.78rem;
        line-height: 1.5;
        color: var(--subtext);
    }

    .dl {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        margin-left: auto;
        font-size: 0.81rem;
        color: var(--muted);
        white-space: nowrap;
    }

    .dl svg {
        width: 13px;
        height: 13px;
        color: #8a9499;
    }

    @media (max-width: 600px) {
        .projects {
            padding: 2rem 1.25rem;
        }

        .header h1 {
            font-size: 1.4rem;
        }

        .box-piles {
            /* three piles fit at their natural size once the gap is tight, so
               no scaling — scaling left dead space above the bottom-aligned pile */
            gap: 1rem;
            min-height: 0;
            margin-bottom: 1.25rem;
        }

        .row {
            grid-template-columns: 30px minmax(0, 1fr);
            gap: 0.7rem;
            padding: 0.7rem 0.35rem;
        }
    }
</style>
