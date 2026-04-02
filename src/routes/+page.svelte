<svelte:head>
    <title>António Leitão</title>
    <meta name="description" content="My homepage" />
</svelte:head>

<script>
	import News from './News.svelte';
    export let data;
</script>

<div class="layout">
    <div class="content-wrapper">
        <div class="main-col">
            <div class="image-container">
                <img
                    src="/avatar_leitao.png"
                    alt="António Leitão"
                    class="profile-image"
                />
            </div>
            <div class="timeline">
                <div class="about">
                    <div class="name">António Leitão</div>
                    I'm a PhD student at the <a href="https://www.sns.it/it">Scuola Normale Superiore</a> and part of the <a href="https://team.inria.fr/datashape/">Datashape Team</a> supervised by <a href="https://www.ninaotter.com/">Nina Otter</a> and <a href="https://kdd.isti.cnr.it/people/giannotti-fosca">Fosca Giannoti</a> working on various projects from topological data analysis, climate science, explainable AI and animal communication.<br />
                    I am a collaborator at <a href="https://www.projectceti.org/">CETI</a> and was previously part of the <a href="https://nplresearch.github.io/">NPL</a> research lab where I worked with <a href="https://lordgrilo.github.io/">Giovanni Petri</a>.
                    <br />
                    My main interests are on Topological Data Analysis and Machine Learning.
                    <br />
                    <br />
                </div>
            </div>
        </div>
        <News news={data.news}/>
    </div>
</div>

<style>
    .layout {
        width: 100%;
        min-height: 88vh;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    a{
        font-weight: 600;
    }

    .content-wrapper {
        display: flex;
        gap: 2rem;
        max-width: 750px;
        align-items: flex-start;
    }

    .main-col {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        flex: 1;
        min-width: 400px;
    }

    .image-container {
        display: grid;
        place-items: start;
    }

    .profile-image {
        width: 8rem;
        height: 8rem;
        object-fit: cover;
        border-radius: 50%;
    }

    .about {
        font-size: 0.9rem;
        color: var(--hover);
    }

    .about .name {
        font-family: "Lora", serif;
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
    }

    .timeline {
        padding: 0;
    }

    /* Responsive design */
    @media (max-width: 768px) {
        .content-wrapper {
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .main-col {
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        .image-container {
            width: 100%;
        }

        .profile-image {
            width: 150px;
            height: 150px;
        }

        .about {
            margin-left: 0;
            text-align: center;
        }

        .about .name {
            text-align: center;
        }

        .timeline {
            width: 100%;
        }
    }
</style>
