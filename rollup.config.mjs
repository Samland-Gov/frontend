import typescript from '@rollup/plugin-typescript';
import sass from 'rollup-plugin-sass';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    sass({
      output: 'dist/styles.css',
    }),
    typescript()
  ],
  external: []
};
