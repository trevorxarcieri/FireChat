import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle/bundle.js',
    format: 'cjs',
  },
  external: [ 'fs' ], // tells Rollup 'I know what I'm doing here'
  plugins: [
    nodeResolve(),
    commonjs()
  ]
};