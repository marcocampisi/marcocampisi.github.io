<script lang="ts">
	import { onMount } from 'svelte';

	export interface TimelineItem {
		period: string; 
		title: string; 
		location: string; 
		description?: string; 
		type: 'work' | 'study'; 
	}

	export let items: TimelineItem[] = [];
	
	export let title: string = 'Esperienze';
	
	onMount(() => {
		
	});
</script>

<section class="timeline-section" aria-labelledby="timeline-heading">
	<h2 class="section-title" id="timeline-heading">{title}</h2>
	{#if items.length > 0}
		<div class="timeline-container">
			{#each items as item, index (index)}
				<div class="timeline-item" data-type={item.type}>
					<div class="timeline-marker">
                    </div>
					<div class="timeline-content">
						<span class="timeline-period">{item.period}</span>
						<h3 class="timeline-item-title">{item.title}</h3>
						<p class="timeline-location">{item.location}</p>
						{#if item.description}
							<p class="timeline-description">{item.description}</p>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<p>Nessuna esperienza da mostrare al momento.</p>
	{/if}
</section>

<style>
	.timeline-section {
		padding: var(--section-padding-y, 4rem) var(--section-padding-x, 2rem);
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
	}

	.section-title {
		text-align: center;
		margin-bottom: 3rem;
		font-size: 2rem;
        font-weight: 700;
        color: var(--text-color);
	}

	.timeline-container {
		position: relative;
		padding-left: 40px;
        border-left: var(--border-width, 2px) solid var(--border-color);
        margin-left: 20px;
	}

	.timeline-item {
		position: relative;
		margin-bottom: 2.5rem;
        padding-left: 30px;
	}
    .timeline-item:last-child {
        margin-bottom: 0;
    }

	.timeline-marker {
		position: absolute;
		left: -42px;
        transform: translateX(-50%);
		top: 4px;
		width: 16px;
		height: 16px;
		background-color: var(--bg-color);
		border: var(--border-width, 2px) solid var(--border-color);
		border-radius: 50%;
		z-index: 2;
        transition: background-color 0.3s ease, border-color 0.3s ease;
	}

	.timeline-content {
		background-color: var(--bg-color);
		padding: 1rem 1.5rem;
		border: var(--border-width, 2px) solid var(--border-color);
		/* border-radius: 4px; */
        position: relative;

        box-shadow: var(--shadow-offset) var(--shadow-offset) 0px var(--shadow-color);
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out, background-color 0.3s ease, border-color 0.3s ease;
	}

    .timeline-item:hover .timeline-content {
         box-shadow: 6px 6px 0px var(--primary-accent);
         transform: translate(-2px, -2px);
    }
    .timeline-item:hover .timeline-marker {
        background-color: var(--primary-accent);
    }


	.timeline-period {
		display: block;
		font-size: 0.85rem;
		color: var(--text-muted-color, #666);
		margin-bottom: 0.25rem;
        font-weight: 500;
	}
    @media (prefers-color-scheme: dark) {
        .timeline-period {
            color: var(--text-muted-color, #bbb);
        }
    }


	.timeline-item-title {
		font-size: 1.2rem;
		font-weight: 600;
		margin: 0 0 0.3rem 0;
        color: var(--text-heading-color, var(--text-color));
	}

	.timeline-location {
		font-size: 0.95rem;
		font-style: italic;
		margin: 0 0 0.5rem 0;
        color: var(--text-color);
	}

	.timeline-description {
		font-size: 0.9rem;
		line-height: 1.6;
		margin: 0;
        color: var(--text-color);
	}

    @media (max-width: 600px) {
        .timeline-container {
            padding-left: 25px;
            margin-left: 10px;
        }
        .timeline-item {
            padding-left: 20px;
        }
        .timeline-marker {
            left: -26px;
            width: 14px;
            height: 14px;
        }
        .timeline-content {
            padding: 0.8rem 1rem;
            box-shadow: 3px 3px 0px var(--border-color);
        }
         .timeline-item:hover .timeline-content {
             box-shadow: 4px 4px 0px var(--primary-accent);
             transform: translate(-1px, -1px);
        }
         .section-title {
            font-size: 1.8rem;
            margin-bottom: 2rem;
        }
    }
</style>