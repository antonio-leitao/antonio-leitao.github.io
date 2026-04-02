<script>
    import Header from "./Header.svelte";
    import "./styles.css";
    let playbackRate=0.5;
</script>

<div class="app">
    <Header />
    <main>
        <slot />
    </main>
</div>
<video
  autoplay
  muted
  loop
  playsinline
  src="/shadows.mp4"
  class="shadow-overlay"
  bind:playbackRate={playbackRate}
></video>

<style>
  .shadow-overlay {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    mix-blend-mode: multiply;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.5;
    transform: rotate(0deg) scale(1);
    /* scale up to cover gaps from rotation */
  }
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0rem 1rem;
        width: 100%;
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>
