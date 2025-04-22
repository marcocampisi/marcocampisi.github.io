<script lang="ts">
	import type { Technology } from '$lib/types/Project';
	export let technologies: Technology[];
</script>

<section class="tech-stack">
	<h2>Tecnologie</h2>
	<div class="icons-grid">
		{#each technologies as tech (tech.name)}
			<div class="tech-item">
				<i class="devicon-{tech.iconClass}" title={tech.name}></i>
				<span>{tech.name}</span>
			</div>
		{/each}
	</div>
</section>

<style>
	h2 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		text-align: center;
	}

	.icons-grid {
		display: grid;
        grid-template-columns: repeat(3, 1fr);
		gap: 2rem 1.5rem;
	}

    @media (min-width: 640px) {
        .icons-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem 2rem;
        }
    }

	@media (min-width: 992px) {
		.icons-grid {
			grid-template-columns: repeat(6, 1fr);
            gap: 2rem 2.5rem;
		}
	}

	.tech-item {
		display: flex; 
		flex-direction: column;
		align-items: center;
		gap: 0.8rem;
		text-align: center;
        transition: transform 0.2s ease-in-out;
	}

    .tech-item:hover {
        transform: translateY(-5px);
    }

	.tech-item i {
		font-size: 3.5rem;
		color: var(--text-color);
        transition: color 0.3s ease;
	}

	span {
		font-size: 0.9rem;
		font-weight: 500;
	}
</style>