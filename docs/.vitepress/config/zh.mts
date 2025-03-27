import { defineConfig } from 'vitepress'
import { generateAPISidebar } from './shared.mts'

// https://vitepress.dev/reference/site-config
export const zh = defineConfig({
  description: "一个灵活简单的 JS 日志库，通过配置不同的 Appender 可以在不同的环境记录或收集日志内容。",
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/zh/guide/introduce', activeMatch: '/zh/guide/' },
      { text: '参考', link: '/zh/reference/use-appenders', activeMatch: '/zh/reference/' },
      { text: 'API', link: '/zh/api/base-log-factory', activeMatch: '/zh/api/' }
    ],

    sidebar: {
      '/zh/guide/': {
        base: '/zh/guide/',
        items: [
          { text: '介绍', link: 'introduce' },
          { text: '快速开始', link: 'quick-start' },
          { text: '贡献指南', link: 'contribution' }
        ]
      },
      '/zh/reference/': {
        base: '/zh/reference/',
        items: [
          { text: '同时配置多个Appender', link: 'use-appenders' },
          { text: '带上下文的API请求日志', link: 'use-context' },
          { text: '动态修改日志级别', link: 'use-level' },
          { text: '进程结束前的资源清理', link: 'use-shutdown' },
          { text: '性能优化建议', link: 'performance' }
        ]
      },
      '/zh/api/': {
        base: '/zh/api/',
        items: generateAPISidebar('../../zh/api', '')
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fengxinming/base-log-factory.git' }
    ]
  }
})
