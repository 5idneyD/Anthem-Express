import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			crawl: true,
			enabled: true,
			onError: "continue",
			entries: [
				'*',
				'/England',
			],
			default: true
		},
			
		browser: {
			hydrate: false,
			router: false
			
		}
	}

};

export default config;









