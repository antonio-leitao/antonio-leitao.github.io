<svelte:head>
    <title>António Leitão</title>
    <meta name="description" content="My homepage" />
</svelte:head>

<script>
    import News from "./News.svelte";
    export let data;
</script>

<section class="layout">
    <div class="container">
        <div class="content-wrapper">
            <div class="main-col">
                <img
                    src="/avatar_leitao.png"
                    alt="António Leitão"
                    class="profile-image"
                />

                <div>
                    <h1 class="name">António Leitão</h1>
                    <div class="bio">
                        <p>
                            I'm a PhD student at the
                            <a href="https://www.sns.it/it">Scuola Normale Superiore</a>
                            and part of the
                            <a href="https://team.inria.fr/datashape/">Datashape Team</a>,
                            supervised by
                            <a href="https://www.ninaotter.com/">Nina Otter</a> and
                            <a href="https://kdd.isti.cnr.it/people/giannotti-fosca"
                                >Fosca Giannotti</a
                            >, working on topological data analysis, climate science,
                            explainable AI and animal communication.
                        </p>
                        <p>
                            I'm a collaborator at
                            <a href="https://www.projectceti.org/">Project CETI</a> and was
                            previously part of the
                            <a href="https://nplresearch.github.io/">NPL</a> research lab,
                            where I worked with
                            <a href="https://lordgrilo.github.io/">Giovanni Petri</a>.
                        </p>
                        <p>
                            Most of what I do ends up as either
                            <a href="/Papers">a paper</a> or
                            <a href="/Projects">software</a>.
                        </p>
                    </div>
                </div>

                {#if data.info.email || data.info.cv}
                    <div class="contact">
                        {#if data.info.email}
                            <a href="mailto:{data.info.email}">{data.info.email}</a>
                        {/if}
                        {#if data.info.email && data.info.cv}
                            <span class="sep">·</span>
                        {/if}
                        {#if data.info.cv}
                            <a href={data.info.cv}>CV</a>
                        {/if}
                    </div>
                {/if}
            </div>

            <News news={data.news} />
        </div>
    </div>
</section>

<style>
    .layout {
        width: 100%;
        min-height: 88vh;
        /* shared with Papers and Projects so all three start at the same height */
        padding: 3.5rem 2rem 3rem;
    }

    .container {
        max-width: 46rem;
        margin: 0 auto;
    }

    .content-wrapper {
        display: flex;
        gap: 2.5rem;
        align-items: flex-start;
    }

    .main-col {
        flex: 1;
        /* was min-width: 400px, which overhung any screen narrower than that */
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
    }

    .profile-image {
        width: 8rem;
        height: 8rem;
        object-fit: cover;
        border-radius: 50%;
        display: block;
    }

    .name {
        font-family: "Lora", serif;
        font-weight: 700;
        font-size: 1.6rem;
        letter-spacing: -0.01em;
        line-height: 1.25;
        color: var(--hover);
        margin-bottom: 0.75rem;
    }

    .bio {
        font-size: 0.9rem;
        line-height: 1.68;
        color: var(--muted);
    }

    .bio p {
        margin-bottom: 0.75rem;
        text-wrap: pretty;
    }

    .bio p:last-child {
        margin-bottom: 0;
    }

    /* a hairline underline in a colour that is not the text colour, so seven
       links in one paragraph read as links without shouting */
    .bio a {
        font-weight: 500;
        color: var(--hover);
        text-decoration: underline;
        text-decoration-color: #c9ccce;
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
    }

    .bio a:hover {
        color: var(--clr-blue);
        text-decoration-color: currentColor;
    }

    .contact {
        border-top: 1px solid var(--highlight);
        padding-top: 0.875rem;
        display: flex;
        align-items: center;
        gap: 0.625rem;
        font-size: 0.81rem;
        color: var(--subdued);
    }

    .contact .sep {
        color: #c4cace;
    }

    @media (max-width: 768px) {
        .layout {
            padding: 2.5rem 1.25rem 2rem;
        }

        .container {
            max-width: 100%;
        }

        .content-wrapper {
            flex-direction: column;
            gap: 2rem;
        }

        .name {
            font-size: 1.4rem;
        }

        .profile-image {
            width: 6rem;
            height: 6rem;
        }
    }
</style>
