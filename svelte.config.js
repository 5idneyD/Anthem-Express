import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: "#svelte",
		prerender: {
			crawl: true,
			enabled: true,
			onerror: 'continue',
			pages: ["*"]
		},
		adapter: adapter(),
		browser: {
			hydrate: false,
			router: false
			
		}
	}

};

export default config;
