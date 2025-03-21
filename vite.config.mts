import typescript from '@rollup/plugin-typescript';
import { globSync } from 'tinyglobby';
import { defineConfig } from 'vite';
import external from 'vite-plugin-external';

import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: globSync('src/**/*.ts'),
      formats: ['es', 'cjs'],
      fileName: '[name]'
    }
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.build.json'
    }),
    external({
      nodeBuiltins: true,
      externalizeDeps: Object.keys(pkg.dependencies)
    })
  ],
  test: {
    name: 'base-log-factory',
    dir: './test'
  }
});
