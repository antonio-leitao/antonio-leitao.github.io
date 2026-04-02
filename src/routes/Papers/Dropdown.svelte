<script>
    import LucideIcon from "./LucideIcon.svelte";

    let open = false;
    let topics = [
        { name: "All", tag: "all" },
        { name: "Topology", tag: "tda" },
        { name: "CETI", tag: "ceti" },
        { name: "Machine Learning", tag: "ml" },
    ];
    function handleSelection(tag) {
        if (selected_tag === tag) {
            selected_tag = "all";
        } else {
            selected_tag = tag;
        }
        open = false;
    }
    function getTopic(tag) {
        return topics.find((obj) => obj.tag === tag) || null;
    }
    export let selected_tag = "all";
    $: selected_topic = getTopic(selected_tag);
</script>

<div class="dropdown">
    <div on:click={() => (open = !open)} class="label">
        {selected_topic.name}
        <LucideIcon name="dropdown" size="18" />
    </div>
    {#if open}
        <div class="list">
            {#each topics as { name, tag }}
                <div
                    on:click={() => handleSelection(tag)}
                    class:selected={selected_tag == tag}
                    class="topic"
                >
                    <div class="circle {tag}" />
                    {name}
                </div>
            {/each}
        </div>
    {/if}
</div>

<style>
    .dropdown {
        position: relative;
        z-index: 3;
        color: var(--muted);
    }
    .label {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .label,
    .list {
        width: 25ch;
        background-color: #fff;
        border-radius: 0.375rem;
        box-shadow: var(--shadow);
    }
    .list {
        position: absolute;
        top: 3.5rem;
        padding: 0.375rem 0;
    }
    .label,
    .topic {
        cursor: pointer;
        padding: 0.5rem;
    }
    .topic {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .topic:hover,
    .selected {
        background-color: var(--ash);
    }
    .circle {
        background-color: lightgray;
        width: 0.375rem;
        height: 0.375rem;
        border-radius: 50%;
        margin-right: 0.5rem;
    }
    .ceti {
        background-color: var(--ml-yellow);
    }
    .tda {
        background-color: var(--ml-cyan);
    }
    .ml {
        background-color: var(--ml-red);
    }
</style>
