import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue/dist/index.js';

let build = {
    lib : {
        name     : 'Writer',
        fileName : (format) => `index.${format}.js`,
        entry    : path.resolve(__dirname, 'src/index.js'),
    },
    rollupOptions : {
        output   : { globals : { vue : 'Vue' } },
        external : ['vue', 'markdown-it', 'prismjs'],
    },
};

export default defineConfig({
    build   : build,
    plugins : [vue()],
    esbuild : { minify: true },
});