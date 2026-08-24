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

  <span class="year">{year}</span>

  <div class="body">
    <a class="title" href={url}>{title}</a>

    <p class="meta">
      {#each authors as author, i}{#if i > 0}{', '}{/if}<span class:highlighted={i === highlightAuthor}>{author}</span>{/each}
      - {venue}
    </p>
  </div>

<style>

  .year {
    text-align: right;
    padding-right: 16px;
    font-family: "Lora", serif;
    font-weight: 400;
    font-size: 0.84rem;
    line-height: 1.3;
    color: #a3abaf;
  }

  /* the entry's second grid column; 23.5px clears the hairline and lines the
     title up with the section heads above */
  .body {
    padding-left: 23.5px;
  }

  .title {
    /* font-family: "Lora", serif; */
    font-weight: 400;
    font-size: 0.94rem;
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
    margin: 0.25rem 0 0;
    font-size: 0.8rem;
    /* color:var(--clr-blue); */
    line-height: 1.4;
  }

  .highlighted {
    color: var(--hover);
  }


</style>
