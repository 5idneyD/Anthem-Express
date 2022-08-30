import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: "#svelte",
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
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
