<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	
	let y = 0; 
	$: isSticky = y > 10; 
	let headerElement: HTMLElement; 
	let headerHeight = 0; 
    let resizeObserver: ResizeObserver | null = null; 
	
	let isMenuOpen = false; 
	
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
	
	function closeMenu() {
		isMenuOpen = false;
	}
	
	onMount(() => {
		if (browser && headerElement) {
			const updateHeight = () => {
                if (!headerElement) return;
				headerHeight = headerElement.offsetHeight;
				document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
			}
			updateHeight(); 

			resizeObserver = new ResizeObserver(updateHeight);
			resizeObserver.observe(headerElement);
		}
	});

    onDestroy(() => {
        if (browser) {
            if (resizeObserver && headerElement) {
                 resizeObserver.unobserve(headerElement);
            }
            document.documentElement.style.removeProperty('--header-height');
        }
        resizeObserver = null; 
    })
	
	const navLinks = [
		{ href: '#hero', text: 'Home' },
		{ href: '#bio', text: 'Chi Sono' },
		{ href: '#tech', text: 'Tecnologie' },
		{ href: '#projects', text: 'Progetti' },
		
	];
</script>

<svelte:window bind:scrollY={y} />

<header class="site-header" class:sticky={isSticky} class:menu-open={isMenuOpen} bind:this={headerElement}>
	<div class="header-container">
		<a href="#hero" aria-label="Homepage" class="logo-link" on:click={closeMenu}>
			<img src="/logo.png" alt="Logo Marco Campisi" class="logo" />
		</a>
		
		<button
			class="menu-toggle"
			aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
			aria-expanded={isMenuOpen}
			on:click={toggleMenu}
		>
			<span class="hamburger-box">
				<span class="hamburger-inner"></span>
			</span>
		</button>

		<nav class="main-nav" aria-label="Navigazione principale">
			<ul class="nav-links">
				{#each navLinks as link (link.href)}
					<li>
						<a href={link.href} class="nav-link" on:click={closeMenu}>{link.text}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</header>

<style>
	.site-header {
		padding-top: 1rem;
        padding-bottom: 1rem;
		border-bottom: var(--border-width) solid transparent;
		background-color: transparent;
		position: relative;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
		transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out, padding-top 0.3s ease-in-out, padding-bottom 0.3s ease-in-out;
	}

	.site-header.sticky {
		position: sticky;
		background-color: var(--bg-color);
		border-bottom-color: var(--border-color);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        padding-top: 0.8rem;
        padding-bottom: 0.8rem;

         @media (prefers-color-scheme: dark) {
            box-shadow: 0 2px 10px rgba(255, 255, 255, 0.05);
         }
	}

	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 2rem;
        padding-right: 2rem;
	}

	.logo-link {
		display: inline-block;
        text-decoration: none;
		flex-shrink: 0;
	}
	.logo {
		height: 40px;
		width: auto;
		display: block;
        border-radius: 100%;
	}

	.main-nav {
    }
	.nav-links {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 1.5rem;
        align-items: center;
	}
    .nav-link {
        text-decoration: none;
        font-weight: 500;
        color: var(--text-color);
        transition: color 0.3s ease;
        padding: 0.5rem 0;
        position: relative;
    }
    .nav-link:hover {
        color: var(--primary-accent);
    }
    .nav-link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--primary-accent);
        transition: width 0.3s ease;
    }
    .nav-link:hover::after {
        width: 100%;
    }

    .menu-toggle {
        display: none;
        background: none;
        border: none;
        padding: 10px;
        cursor: pointer;
        z-index: 1010;
        margin: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        color: inherit;
    }
    .hamburger-box {
        width: 30px;
        height: 24px;
        display: inline-block;
        position: relative;
    }
    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
        width: 100%;
        height: 3px;
        background-color: currentColor;
        position: absolute;
        transition: transform 0.25s ease-in-out, background-color 0.3s ease;
        left: 0;
        border-radius: 1px;
    }
    .hamburger-inner {
        top: 50%;
        transform: translateY(-50%);
    }
    .hamburger-inner::before,
    .hamburger-inner::after {
        content: '';
    }
    .hamburger-inner::before {
        top: -10px;
    }
    .hamburger-inner::after {
        bottom: -10px;
    }

    .site-header.menu-open .hamburger-inner {
        background-color: transparent;
    }
    .site-header.menu-open .hamburger-inner::before {
        transform: translateY(10px) rotate(45deg);
    }
    .site-header.menu-open .hamburger-inner::after {
        transform: translateY(-10px) rotate(-45deg);
    }


    @media (max-width: 768px) {
        .header-container {
            padding-left: 1rem;
            padding-right: 1rem;
        }
		.logo {
            height: 35px;
        }

        .menu-toggle {
            display: block;
        }

        .main-nav {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--bg-color);
            border-top: var(--border-width) solid var(--border-color);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-out, opacity 0.3s ease-out;
            transform: translateY(-10px);
            opacity: 0;
            pointer-events: none;

            @media (prefers-color-scheme: dark) {
                box-shadow: 0 5px 10px rgba(255, 255, 255, 0.05);
            }
        }

        .site-header.menu-open .main-nav {
            display: block;
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
        }

        .nav-links {
            flex-direction: column;
            gap: 0;
            padding: 1rem 0;
            align-items: stretch;
        }

        .nav-links li {
            width: 100%;
        }

        .nav-link {
            display: block;
            padding: 1rem 2rem;
            text-align: center;
            border-bottom: 1px solid rgba(128, 128, 128, 0.1);
            width: 100%;
            box-sizing: border-box;
        }
        .nav-link::after {
            display: none;
        }
        .nav-links li:last-child .nav-link {
            border-bottom: none;
        }
    }
</style>