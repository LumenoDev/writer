import vue from 'rollup-plugin-vue';
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [{
    input  : 'src/index.js',
    output : [
        { format : 'cjs', file : 'dist/index.cjs.js' },
        { format : 'esm', file : 'dist/index.esm.js' },
    ],
    plugins : [vue(), peerDepsExternal(), terser()],
}];