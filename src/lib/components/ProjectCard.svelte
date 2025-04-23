<script lang="ts">
	import type { Project } from '$lib/types/Project';
	export let project: Project;
</script>

<div class="card">
	<h3>{project.title}</h3>
	<p>{project.description}</p>
	{#if project.technologies && project.technologies.length > 0}
		<div class="tech-tags">
			{#each project.technologies as tech}
				<span class="tag">{tech}</span>
			{/each}
		</div>
	{/if}
	<div class="card-links">
		<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" class="link-button">
			GitHub →
		</a>
		{#if project.liveUrl}
			<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" class="link-button">
				Live Demo →
			</a>
		{/if}
	</div>
</div>

<style>
	.card {
		background-color: var(--card-bg);
		border: var(--border-width) solid var(--border-color);
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		box-shadow: var(--shadow-offset) var(--shadow-offset) 0px var(--shadow-color);
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.3s ease, border-color 0.3s ease;
	}

    .card:hover {
         transform: translate(-3px, -3px);
         box-shadow: calc(var(--shadow-offset) + 3px) calc(var(--shadow-offset) + 3px) 0px var(--primary-accent);
    }

	h3 {
		font-size: 1.5rem;
		margin: 0;
		font-weight: 700;
	}

	p {
		flex-grow: 1;
		margin: 0;
		font-size: 1rem;
		line-height: 1.6;
	}

	.tech-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.tag {
		background-color: var(--primary-accent);
		padding: 0.2rem 0.6rem;
		font-size: 0.8rem;
		border-radius: 4px;
		border: 1px solid var(--border-color);
        transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease; /* Transizione tema */
	}

	.card-links {
		margin-top: 1rem;
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.link-button {
		display: inline-block;
		text-decoration: none;
		padding: 0.5rem 1rem;
		border: var(--border-width) solid var(--border-color);
		background-color: var(--bg-color);
		color: var(--text-color);
		font-weight: 500;
        box-shadow: 3px 3px 0px var(--secondary-accent);
        transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.2s ease; /* Transizioni */
	}

</style>