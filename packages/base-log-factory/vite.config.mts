import { EOL } from 'node:os';

import { defineConfig } from 'vite';
import combine from 'vite-plugin-combine';
import external from 'vite-plugin-external';
import pluginSeparateImporter from 'vite-plugin-separate-importer';

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
      dts: {
        include: 'src/*.ts'
      },
      beforeWrite(code) {
        return `${code + EOL}export * from './typings';`;
      }
    }),
    external({
      nodeBuiltins: true,
      externalizeDeps: Object.keys(pkg.dependencies)
    }),
    pluginSeparateImporter({
      libs: [{
        name: 'date-manip',
        importFrom(importer, libName) {
          return {
            es: `${libName}/dist/${importer}.mjs`,
            cjs: `${libName}/dist/${importer}`
          };
        }
      }]
    })
  ],
  test: {
    name: pkg.name,
    dir: './test'
  }
});
