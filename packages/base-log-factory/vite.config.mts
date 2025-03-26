import { EOL } from 'node:os';

import typescript from '@rollup/plugin-typescript';
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
      src: ['src/*.ts', '!src/typings.ts'],
      target: 'src/index.ts',
      beforeWrite(code) {
        return `${code + EOL}export * from './typings';`;
      }
    }),
    typescript({
      tsconfig: './tsconfig.build.json'
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
