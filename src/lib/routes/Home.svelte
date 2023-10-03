<script>
    import {push} from "svelte-spa-router";
    import {info,projects, useMediaQuery} from "../scripts/store.js";
    import PaperTray from "../comp/PaperTray.svelte"
    import Icon from "../comp/Icon.svelte";
    import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    let open = true;
    function formatNumber(number) {
      const formattedNumber = Math.max(0, Math.min(number, 999));
      return formattedNumber.toString().padStart(3, '0');
    }
    let selected_project=null;
    const isSmallScreen = useMediaQuery('(max-width: 1150px)');
    function openResearch(){
        open=!open
        if ($isSmallScreen){
            push("/research")
        }
    }
</script>
<div class="container">
    <div class="wrapper">
        <div style="position: absolute; left: 50%; top:25%;">
            <div class="icon">
            {#if selected_project}
            <Icon
                name={selected_project}
                color={"#13171b"}
                opacity={1}
                height={"100%"}
                width={"100%"}
            />
            {/if}
            </div>
        </div>
        <div class="content">
            <div>
                <div class="greet">
                    <div class="name">
                        António Leitão
                    </div>
                    <div class="link">
                        <div style="cursor:pointer;" on:click={openResearch}> Research -></div>
                </div>
            </div>
            <div class="bio">
                {$info.bio}
            </div>
            <div class="projects">
                {#each $projects as project, i}
                <div class="project"
                            on:mouseenter={()=>selected_project=project.thumbnail}
                            on:mouseleave={()=>selected_project=null}
                            >
                        <div class="project-order">{formatNumber(i)}</div>
                        <div class="project-name"> {project.name}</div>
                </div>
                {/each}
            </div>
        </div>
        <div class="footer">
            <a href={info.twitter}>Twitter</a>::<a href={info.github}>Github</a>::<a href={info.email}>E-mail</a>
        </div>
    </div>
</div>
    {#if open && !$isSmallScreen}
    <div class="papers"
        in:fly={{duration: 400, x: 75, opacity: 0.75, easing: quintOut }}>
        <PaperTray/>
    </div>
    {/if}
</div>

<style>
    .container{
        display: flex;
        height:100vh;
    }
    .wrapper{
        /* margin:15rem 13rem 0 13rem; */
        position:relative;
        flex:1;
        display:grid;
        place-items:center;
        margin-left:4rem;
    }
    .content{
        width:700px;
        display:flex;
        flex-direction:column;
        position:relative;
        justify-content:space-between;
    }
    .icon{
        position: relative;
        scale:2;
        left: -50%;
        z-index:-3;
        pointer-events: none;
    }
    .name{
        margin: 1rem 0;
        font-size: 1.5rem;
        font-weight:800;
        line-height: 2rem;
    }
    .name::before{
        content:"name.";
        position:absolute;
        left:-4rem;
        font-size:1rem;
        color:var(--muted)
    }
    .greet{
        display:flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .bio{
        font-family: "Noto Sans", sans-serif;
        line-height: 1.8rem;
        margin-bottom:1rem;
        font-weight:300;
    }
    .bio::before{
        font-family: "JetBrains Mono", sans-serif;
        content:"bio.";
        position:absolute;
        left:-3.5rem;
        font-size:1rem;
        color:var(--muted)
    }
    .projects{
        width:100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 15px;
        column-gap: 10px;
        line-height:1rem;
        font-size:1rem;
    }
    .projects::before{
        content:"proj.";
        position:absolute;
        left:-4rem;
        font-size:1rem;
        color:var(--muted)
    }
    .project{
        display:flex;
        cursor:pointer;
    }
    .project-name{
        position:relative;
    }
    .project-name::before{
        content:"";
        position:absolute;
        width:0;
        height:1rem;
        top:0;
        left:0;
        background-color:var(--foreground);
        transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index:-1;
    }
    .project:hover>.project-name::before{
        width:100%;
    }
    .project:hover>.project-name{
        color:var(--hover) 
    }
    .project-order{
        margin-right:0.375rem;
        color:var(--muted)
    }
    .papers{
        width: 360px;
        height:100vh;
        overflow-y:scroll;
    }
    .footer{
        display:flex;
        width:100%;
        flex-direction:row;
        justify-content:flex-end;
        margin-top:8rem;
        color:var(--muted);
        cursor: pointer;
    }
    .footer a:hover{
        color:var(--foreground)
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    @media screen and (max-width: 850px){
      .content{
          width: 470px;
          }
      .footer{
          justify-content: center;
          }
      }
</style>