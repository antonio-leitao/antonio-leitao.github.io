<script>
  /**
   * @type {{ title: string, authors: string[], venue: string, year: number, snippet: string, citedBy?: number, links?: { label: string, href: string }[] }}
   */
  export let title;
  export let url;
  export let authors;
  export let venue;
  export let year;
  /** @type {number|undefined} Index of the author to underline */
  export let highlightAuthor = undefined;
</script>

  <a class="title" href={url}>{title}</a>

  <p class="meta">
    {#each authors as author, i}{#if i > 0}{', '}{/if}<span class:highlighted={i === highlightAuthor}>{author}</span>{/each}
    - {venue}, {year}
  </p>

<style>

  .title {
    /* font-family: "Lora", serif; */
    font-weight: 400;
    font-size: 0.9rem;
    text-decoration: none;
    line-height: 1.2;
    color: var(--hover);
  }

  .title:hover {
    /* color: #0076f0; */
		text-decoration: underline;
      color: var(--clr-blue);
  }

  .meta {
    margin: 0.25rem 0 0.4rem;
    font-size: 0.78rem;
    /* color:var(--clr-blue); */
    line-height: 1.4;
  }

  .highlighted {
    text-decoration: underline;
    /* font-weight: 600; */
  }


</style>
