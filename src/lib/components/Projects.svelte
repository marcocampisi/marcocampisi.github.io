<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { Project } from '$lib/types/Project';

	export let projects: Project[];
</script>

<section class="projects">
	<h2>Progetti Recenti</h2>
	<div class="projects-grid">
		{#each projects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>

<style>
	h2 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		text-align: center;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2.5rem;
	}

    @media (max-width: 700px) {
        .projects-grid {
             grid-template-columns: 1fr;
             gap: 2rem;
        }
    }
</style>