<script>
    import Package from "./Package.svelte";
    import Socials from "./Socials.svelte";
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    let ready = false;
    onMount(() => (ready = true));
    export let data;
    let hoveredBox = null;
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
    {#if hoveredBox}
        <div class="hovered-name">
            <div class="title">
                {hoveredBox.name}
            </div>
            <div class="socials">
                <Socials pip={hoveredBox.pip} url={hoveredBox.url} />
            </div>
            <div class="subtitle">
                {hoveredBox.summary}
            </div>
        </div>
    {:else}
        <div class="hovered-temp">List of projects that I've developed</div>
    {/if}
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
                        <a href={box.url} target="_blank"
                            ><Package
                                icon={box.icon}
                                size={box.size}
                                shadow={index == 0}
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
                        <a href={box.url} target="_blank"
                            ><Package
                                icon={box.icon}
                                size={box.size}
                                shadow={index == 0}
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
                        <a href={box.url} target="_blank"
                            ><Package
                                icon={box.icon}
                                size={box.size}
                                shadow={index == 0}
                            /></a
                        >
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</section>

<style>
    .projects {
        width: 100%;
        min-height: 88vh;
        padding: 0rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .box-piles {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        min-width: 60%;
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
    }

    .box-container:hover ~ .box-container {
        transform: translateY(-30px);
    }
    .box-container {
        margin-bottom: -0.75rem;
    }

    .hovered-temp {
        position: absolute;
        width: 100%;
        top: 15%;
        font-size: 1.3rem;
        font-weight: 200;
        text-align: center;
        margin-bottom: 1.5rem;
    }
    .hovered-name {
        position: absolute;
        width: 100%;
        top: 10%;
    }
    .socials {
        display: grid;
        place-items: center;
    }
    .title {
        text-align: center;
        font-family: "Lora", serif;
        font-size: 1.4rem;
        color: var(--hover);
        margin-bottom: 0.5rem;
    }

    .subtitle {
        text-align: center;
        font-size: 0.9rem;
        color: var(--hover);
    }
</style>
