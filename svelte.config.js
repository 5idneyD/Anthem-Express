// import adapter from '@sveltejs/adapter-netlify';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter(),
// 		browser: {
// 			hydrate: false,
// 			router: false
			
// 		}
// 	}

// };

// export default config;


import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

const config = {
    preprocess: preprocess(),
    kit: {
        adapter: adapter(),
        prerender: {
            default: true
        },
        files: {
            assets: 'static',
            lib: 'src/lib'
        }
    }
};

export default config;







