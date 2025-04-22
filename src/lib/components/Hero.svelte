<script lang="ts">
	export let name: string;
	export let title: string;
	export let githubUrl: string | undefined = undefined;
	export let linkedinUrl: string | undefined = undefined;

	const mailIconSrc = '/icons/mail.svg';
</script>

<section class="hero">
	<h1>{name}</h1>
	<p class="subtitle">{title}</p>

	<div class="social-links">
		{#if githubUrl}
			<a
				href={githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Profilo GitHub"
				class="social-link neo-button"
                title="GitHub"
			>
				<i class="devicon-github-original"></i>
			</a>
		{/if}
		{#if linkedinUrl}
			<a
				href={linkedinUrl}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Profilo LinkedIn"
				class="social-link neo-button"
                title="LinkedIn"
			>
				<i class="devicon-linkedin-plain"></i>
			</a>
		{/if}
	</div>
</section>

<style>
	.hero {
		min-height: 60vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		border-bottom: var(--border-width) solid var(--border-color);
		padding: 4rem 1rem;
        transition: border-color 0.3s ease;
	}

	h1 {
		font-size: clamp(3rem, 10vw, 6rem);
		font-weight: 700;
		margin: 0;
		line-height: 1.1;
		color: var(--text-color);
        transition: color 0.3s ease;
	}

	.subtitle {
		font-size: clamp(1.2rem, 4vw, 1.8rem);
		margin-top: 0.5rem;
		font-family: var(--font-body);
		font-weight: 500;
		color: var(--text-color);
		opacity: 0.8;
        transition: color 0.3s ease;
		margin-bottom: 2.5rem;
	}

	.social-links {
		display: flex;
		gap: 1.5rem;
		align-items: center;
	}

	.social-link {
		display: inline-flex;
        justify-content: center;
        align-items: center;
		text-decoration: none;
		padding: 0.75rem;
		border: var(--border-width) solid var(--border-color);
		background-color: var(--bg-color);
		color: var(--text-color);
		transition: transform 0.15s ease, box-shadow 0.15s ease, background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
        aspect-ratio: 1 / 1;
	}

    .neo-button {
        box-shadow: var(--shadow-offset) var(--shadow-offset) 0px var(--shadow-color);
    }

	.social-link:hover {
		transform: translate(-3px, -3px);
        box-shadow: calc(var(--shadow-offset) + 3px) calc(var(--shadow-offset) + 3px) 0px var(--primary-accent);
	}

	.social-link i {
		font-size: 1.8rem;
        line-height: 1;
        display: block;
	}

    .social-icon-svg {
        width: 1.8rem; 
        height: 1.8rem;
        display: block;
        fill: currentColor;
    }

</style>