import { EOL } from 'node:os';

import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'vite';
import pluginCombine from 'vite-plugin-combine';
import pluginExternal from 'vite-plugin-external';

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
    pluginCombine({
      src: ['src/*.ts', '!src/typings.ts'],
      target: 'src/index.ts',
      beforeWrite: (code) => {
        return `${code}${EOL}export * from './typings';`;
      }
    }),
    pluginExternal({
      nodeBuiltins: true,
      externalizeDeps: Object.keys(pkg.dependencies)
    }),
    typescript({
      tsconfig: './tsconfig.build.json'
    })
  ]
});
