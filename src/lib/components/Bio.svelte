<script lang="ts">
	export let content: string;

	const animePicSrc = '/profile-anime.png';
	const realPicSrc = '/profile-real.png'; 

	let mouseX = 0;
	let mouseY = 0;
	let isHovering = false;
	const revealRadius = 75;

	function handleMouseEnter() {
		isHovering = true;
	}

	function handleMouseLeave() {
		isHovering = false;
	}

	function handleMouseMove(event: MouseEvent) {
		if (!isHovering) return;

		const target = event.currentTarget as HTMLElement;
        if (!target) return;

		const rect = target.getBoundingClientRect();
		mouseX = event.clientX - rect.left;
		mouseY = event.clientY - rect.top;
	}

</script>

<section class="bio">
	<div class="bio-container">
		<div
			class="profile-picture-container"
			on:mouseenter={handleMouseEnter}
			on:mouseleave={handleMouseLeave}
			on:mousemove={handleMouseMove}
			style="--mouse-x:{mouseX}px; --mouse-y:{mouseY}px; --reveal-radius:{isHovering ? revealRadius : 0}px;"
		>
			<img
				src={animePicSrc}
				alt="Foto profilo stile anime"
				class="profile-picture base-image"
				width="200"
				height="200"
			/>
			<img
				src={realPicSrc}
				alt="Foto profilo reale"
				class="profile-picture reveal-image"
				width="200"
				height="200"
			/>
		</div>

		<div class="bio-content">
			<h2>Chi Sono</h2>
			<div class="text-content">
				{@html content}
			</div>
		</div>
	</div>
</section>

<style>
	.bio-container {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: 3rem;
	}
	.bio-content {
		flex: 1;
		min-width: 280px;
	}
	h2 {
		font-size: 2.5rem;
		margin-top: 0;
		margin-bottom: 1.5rem;
		border-bottom: var(--border-width) solid var(--primary-accent);
		display: inline-block;
		padding-bottom: 0.3rem;
	}
	.text-content {}
    @media (max-width: 768px) {}
	:global(.bio .text-content p) { margin-bottom: 1em; }
	:global(.bio .text-content p:last-child) { margin-bottom: 0; }


	.profile-picture-container {
		flex: 0 0 200px;
		position: relative;
		width: 200px;
		height: 200px;
		cursor: pointer;
		overflow: hidden;
        border: var(--border-width) solid var(--border-color);
		box-shadow: var(--shadow-offset) var(--shadow-offset) 0px var(--shadow-color);
        transition: border-color 0.3s ease, box-shadow 0.3s ease;
	}

    .profile-picture {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

	.base-image {
		position: relative;
		z-index: 1;
	}

	.reveal-image {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 2;
        clip-path: circle(var(--reveal-radius) at var(--mouse-x) var(--mouse-y));
        transition: clip-path 0.1s ease-out;
	}

    @media (max-width: 768px) {
		.bio-container {
			flex-direction: column;
			align-items: center;
            gap: 2rem;
		}
        .profile-picture-container {
            flex-basis: auto;
            margin-bottom: 1rem;
        }
	}

</style>