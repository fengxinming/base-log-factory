import { defineConfig, DefaultTheme } from "vitepress";
import { readdirSync, statSync } from 'node:fs'
import { fileURLToPath } from 'node:url';
import { dirname, basename, join } from 'node:path'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons';

import pkg from '../../../packages/base-log-factory/package.json';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const shared = defineConfig({
  title: pkg.name,
  rewrites: {
    'en/:rest*': ':rest*'
  },
  base: process.env.BASE_URL || '/',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, '[!code')
        }
      }
    ],
    config(md) {
      // TODO: remove when https://github.com/vuejs/vitepress/issues/4431 is fixed
      const fence = md.renderer.rules.fence!
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = 'root' } = env
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case 'zh':
              return '复制代码'
            default:
              return 'Copy code'
          }
        })()
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`
        )
      }
      md.use(groupIconMdPlugin)
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fengxinming/base-log-factory.git' }
    ]
  },

  vite: {
    plugins: [
      groupIconVitePlugin() as any
    ]
  }
})


export function generateAPISidebar(apiDir: string, linkPath: string): DefaultTheme.SidebarItem[] {
  const mdDir = join(__dirname, apiDir);
  return readdirSync(mdDir)
    .reduce((items, file) => {
      const filePath = join(mdDir, file);
      if (statSync(filePath).isDirectory()) {
        items.push({
          text: file,
          items: generateAPISidebar(join(apiDir, file), `${linkPath}/${file}/`)
        });
      } else {
        const fnName = basename(file, '.md');
        items.push({
          text: fnName,
          link: `${linkPath}${file}`
        });
      }
      return items;
    }, [] as DefaultTheme.SidebarItem[]);
}