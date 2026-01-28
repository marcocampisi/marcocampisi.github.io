<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="not-found-container">
	<div class="content-box">
		<h1 class="status-code" aria-label="Errore 404">404</h1>
		<h2 class="message">Pagina Non Trovata</h2>
		<p class="description">
			Oops! Sembra che la risorsa che stai cercando ({$page.url.pathname}) non esista o sia stata spostata.
		</p>
		<a href="/" class="home-link">
			<span>Torna alla Home</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon"><polyline points="9 18 15 12 9 6"></polyline></svg>
		</a>
	</div>
</div>

<style>
	.not-found-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 80vh;
		padding: 2rem;
		text-align: center;
		background-color: var(--bg-color);
		color: var(--text-color);
        font-family: var(--font-main, sans-serif);
	}

	.content-box {
		max-width: 600px;
	}

	.status-code {
		font-size: clamp(6rem, 25vw, 12rem);
		font-weight: 700;
		line-height: 1;
		margin-bottom: 0;
		color: var(--primary-accent);
		text-shadow: 3px 3px 0 var(--border-color, rgba(0,0,0,0.5));

        @media (prefers-color-scheme: dark) {
             text-shadow: 3px 3px 0 var(--border-color, rgba(255,255,255,0.3));
        }
	}

	.message {
		font-size: clamp(1.5rem, 5vw, 2.5rem);
		font-weight: 600;
		margin-top: 0.5rem;
		margin-bottom: 1rem;
		color: var(--text-color);
	}

	.description {
		font-size: 1rem;
		line-height: 1.6;
		margin-bottom: 2.5rem;
        color: var(--text-secondary, var(--text-color));
        opacity: 0.9;
        max-width: 450px;
        margin-left: auto;
        margin-right: auto;
	}
    :global(.description code) {
        background-color: rgba(128,128,128, 0.15);
        padding: 0.1em 0.4em;
        border-radius: 4px;
        font-size: 0.9em;
    }

	.home-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.8rem 1.8rem;
		background-color: var(--primary-accent);
		color: var(--bg-color);
		border: var(--border-width, 2px) solid var(--border-color, black);
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		box-shadow: 4px 4px 0px var(--border-color, black);
		transition: transform 0.15s ease-out, box-shadow 0.15s ease-out, background-color 0.2s ease;
        position: relative;
        @media (prefers-color-scheme: dark) {
             border-color: var(--border-color, white);
             box-shadow: 4px 4px 0px var(--border-color, white);
        }
	}

	.home-link:hover,
    .home-link:focus-visible
    {
		background-color: var(--primary-accent-darker, var(--primary-accent));
		transform: translate(2px, 2px);
		box-shadow: 2px 2px 0px var(--border-color, black);

        @media (prefers-color-scheme: dark) {
            box-shadow: 2px 2px 0px var(--border-color, white);
        }
	}
    .home-link:active {
        transform: translate(3px, 3px);
		box-shadow: 1px 1px 0px var(--border-color, black);

        @media (prefers-color-scheme: dark) {
            box-shadow: 1px 1px 0px var(--border-color, white);
        }
    }


	.arrow-icon {
		width: 1.2em;
		height: 1.2em;
        transition: transform 0.2s ease;
	}
    .home-link:hover .arrow-icon,
    .home-link:focus-visible .arrow-icon {
        transform: translateX(3px); /* Piccola animazione freccia */
    }

    /* Responsive adjustments */
    @media (max-width: 600px) {
        .content-box {
            padding: 2rem 1rem; /* Meno padding laterale su mobile */
             /* Rimuovi bordo/ombra se li avevi aggiunti, per più spazio */
            /* border: none; */
            /* box-shadow: none; */
        }
        .message {
             font-size: clamp(1.3rem, 6vw, 2rem);
        }
        .description {
            font-size: 0.95rem;
        }
        .home-link {
            padding: 0.7rem 1.5rem;
            font-size: 0.95rem;
        }
    }
</style>