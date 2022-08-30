import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			edge: true
		}),
		browser: {
			hydrate: false,
			router: false
			
		}
	}

};

export default config;









