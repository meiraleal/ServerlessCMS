import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */


export default {
	preprocess: vitePreprocess(),
	
	vitePlugin: {
		inspector: true,   
	},
    kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'docs',
            assets: 'docs',
            fallback: "index.html",
            precompress: true,
            strict: false
        })
    }
};