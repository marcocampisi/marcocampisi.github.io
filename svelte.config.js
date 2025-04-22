import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
            pages: 'build',    // Nome della cartella di output per i file statici (HTML, ecc.)
            assets: 'build',   // Nome della cartella dove mettere anche gli asset (CSS, JS, img)
            fallback: '404.html', // Nessuna pagina di fallback SPA di default. Puoi mettere 'index.html' o '404.html' se necessario.
            precompress: false, // Non pre-comprimere i file (gzip/brotli) di default
            strict: true       // Fallisce la build se una pagina non può essere pre-renderizzata
        }),
		paths: {
			base: ''
		},
	}
};

export default config;
