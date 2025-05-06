import { defineConfig } from 'vite';
import combine from 'vite-plugin-combine';
import external from 'vite-plugin-external';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: [],
      formats: ['es', 'cjs'],
      fileName: '[name]'
    }
  },
  plugins: [
    combine({
      src: 'src/*.ts',
      target: 'src/index.ts',
      exports: 'all',
      dts: true
    }),
    external({
      nodeBuiltins: true,
      externalizeDeps: Object.keys(pkg.dependencies)
    })
  ],
  test: {
    name: pkg.name,
    dir: './test'
  }
});
