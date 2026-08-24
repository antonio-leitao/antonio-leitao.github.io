<script>
    export let news;
</script>

<aside class="news">
	<div class="news-header">Latest</div>
	<div class="news-list">
		{#each news as item}
			<div class="news-item">
				<span class="news-date">{item.date}</span>
				{#if item.link}
					<a href={item.link} class="news-text">{item.text}</a>
				{:else}
					<span class="news-text">{item.text}</span>
				{/if}
			</div>
		{/each}
	</div>
	<a class="more" href="/Papers">
		<span>All publications</span>
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M5 12h14" />
			<path d="m13 6 6 6-6 6" />
		</svg>
	</a>
</aside>

<style>
	.news {
		width: 230px;
		flex-shrink: 0;
		padding-top: 0.125rem;
	}

	.news-header {
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--muted, #999);
		margin-bottom: 1.2rem;
	}

	.news-list {
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
		border-left: 1.5px solid var(--border, #e0e0e0);
		padding-left: 1rem;
	}

	.news-item {
		display: flex;
		flex-direction: column;
		gap: 1px;
		position: relative;
	}

	.news-item::before {
		content: '';
		position: absolute;
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--border, #ccc);
		border: 2px solid var(--bg, #fff);
		left: calc(-1rem - 6px);
		top: 0.4em;
	}

	.news-date {
		font-size: 0.65rem;
		color: var(--muted, #999);
	}

	.news-text {
		font-size: 0.78rem;
		color: var(--hover, #555);
		line-height: 1.35;
	}

	a.news-text {
		text-decoration: none;
		/* font-weight: 600; */
	}

	a.news-text:hover {
		text-decoration: underline;
        color:var(--clr-blue);
	}

	.more {
		display: inline-flex;
		align-items: center;
		gap: 0.3rem;
		margin-top: 1.25rem;
		margin-left: 1rem;
		font-size: 0.75rem;
		color: var(--subdued);
		text-decoration: none;
	}

	.more span {
		border-bottom: 1px solid #cdd2d4;
	}

	.more svg {
		width: 11px;
		height: 11px;
	}

	.more:hover {
		color: var(--clr-blue);
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.news {
			width: 100%;
			padding-top: 0.5rem;
		}
	}
</style>
