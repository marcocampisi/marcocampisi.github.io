<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Bio from '$lib/components/Bio.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import type { Project, Technology } from '$lib/types/Project';
	import Timeline from '$lib/components/Timeline.svelte';
	import type { TimelineItem } from '$lib/components/Timeline.svelte';

	const yourName = "Marco Campisi";
	const yourTitle = "Full-Stack Developer";
	const bioContent = `Sviluppatore per professione, curioso per natura. Mi diverte capire come funzionano le cose e usare la tecnologia per costruire qualcosa di nuovo. Nel tempo libero, mi perdo volentieri nella musica e nel cinema, che trovo siano ottimi modi per allenare la creatività. Se vuoi metterti in contatto per parlare di tecnologia, progetti o scambiare opinioni, aggiungimi su LinkedIn!`;

    const githubUsername = "marcocampisi";
    const linkedinProfileName = "marcocampisi02";

    const githubUrl = `https://github.com/${githubUsername}`;
    const linkedinUrl = `https://www.linkedin.com/in/${linkedinProfileName}`;

	const technologies: Technology[] = [
		{ name: 'JavaScript', iconClass: 'javascript-plain' },
		{ name: 'TypeScript', iconClass: 'typescript-plain' },
		{ name: 'Vue.js', iconClass: 'vuejs-plain' },
		{ name: 'C#', iconClass: 'csharp-plain' },
		{ name: '.NET', iconClass: 'dot-net-plain'},
		{ name: 'Svelte', iconClass: 'svelte-plain'},
		{ name: 'React', iconClass: 'react-plain'},
		{ name: 'Laravel', iconClass: 'laravel-plain'},
		{ name: 'PHP', iconClass: 'php-plain'},
		{ name: 'Tailwind', iconClass: 'tailwindcss-plain'},
		{ name: 'Python', iconClass: 'python-plain'},
		{ name: 'MySQL', iconClass: 'mysql-original' },
	];

	const myExperiences: TimelineItem[] = [
		{
			period: 'Feb 2024 - Presente',
			title: 'Full-Stack Developer',
			location: 'QCSNET S.r.l.',
			description: 'Apprendistato professionale come sviluppatore full-stack. Pricipali tecnologie: C#, .NET, Vue.js, TypeScript.',
			type: 'work'
		},
		{
			period: 'Apr 2023 - Nov 2023',
			title: 'Corso Full-Stack Web Developer',
			location: 'Boolean',
			description: 'Bootcamp intensivo di 6 mesi per sviluppatori web full-stack. Ho acquisito competenze in JavaScript, Vue.js, PHP, Laravel e MySQL.',
			type: 'study'
		},
        {
			period: 'Set 2015 - Giu 2020',
			title: 'Liceo Classico',
			location: 'I.I.S "M. Raeli" - Noto (SR)',
			description: 'Diploma di maturità classica. Ho sviluppato una solida base culturale e capacità di analisi critica. Voto: 100/100.',
			type: 'study'
		}
	];

	const projects: Project[] = [
        {
			id: 1,
			title: 'Progetto Portfolio (Questo Sito!)',
			description: 'Il mio portfolio personale costruito con SvelteKit e TypeScript.',
			githubUrl: 'https://github.com/marcocampisi/marcocampisi.github.io',
			technologies: ['Svelte', 'TypeScript', 'CSS']
		},
		{
			id: 2,
			title: 'Team-1-BMusicTeachers-backend',
			description: 'Backend per il progetto finale del corso Boolean.',
			githubUrl: 'https://github.com/marcocampisi/Team-1-BMusicTeachers-backend',
			technologies: ['PHP', 'Laravel', 'Blade', 'MySQL']
		},
        {
            id: 3,
            title: 'Team-1-BMusicTeachers-frontend',
            description: 'Frontend per il progetto finale del corso Boolean.',
            githubUrl: 'https://github.com/marcocampisi/Team-1-BMusicTeachers-frontend',
            technologies: ['Vue.js', 'JavaScript', 'CSS']
        }
	];
</script>

<div id="hero">
    <Hero
        name={yourName}
        title={yourTitle}
        githubUrl={githubUrl}
        linkedinUrl={linkedinUrl}
    />
</div>
<div id="bio"> <Bio content={bioContent} /> </div>
<div id="tech"> <TechStack {technologies} /> </div>
<Timeline items={myExperiences} title="Il Mio Percorso" />
<div id="projects"> <Projects {projects} /> </div>

<footer class="site-footer">
	<p>© {new Date().getFullYear()} {yourName}. Tutti i diritti riservati.</p>
</footer>

<style>
	.site-footer {
		text-align: center;
		padding: 2rem 1rem;
		margin-top: 4rem;
		font-size: 0.9rem;
		color: var(--text-color);
		opacity: 0.7;
		border-top: var(--border-width) solid var(--border-color);
        transition: color 0.3s ease, border-color 0.3s ease;
	}
</style>