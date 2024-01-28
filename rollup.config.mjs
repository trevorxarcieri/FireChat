import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default [
{
  input: 'src/search_refining/search_refining.js',
  output: {
    file: 'bundles/search_refining_bundle.js',
    format: 'cjs',
  },
  external: [ 'fs' ],
  plugins: [
    nodeResolve(),
    commonjs()
  ]
},
{
  input: 'src/popup/popup.js',
  output: {
    file: 'bundles/popup_bundle.js',
    format: 'cjs',
  },
  external: [ 'fs' ],
  plugins: [
    nodeResolve(),
    commonjs()
  ]
},
];