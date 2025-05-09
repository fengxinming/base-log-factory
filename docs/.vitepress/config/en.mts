import { defineConfig } from 'vitepress'
import { generateAPISidebar } from './shared.mts'

// https://vitepress.dev/reference/site-config
export const en = defineConfig({
  description: "A flexible and simple JS logging library that allows logging or collecting logs in different environments by configuring various Appenders.",
  lang: 'en-US',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/introduce', activeMatch: '/guide/' },
      { text: 'Reference', link: '/reference/use-appenders', activeMatch: '/reference/' },
      { text: 'API', link: '/api/base-log-factory', activeMatch: '/api/' }
    ],

    sidebar: {
      '/guide/': {
        base: '/guide/',
        items: [
          { text: 'Introduce', link: 'introduce' },
          { text: 'Quick Start', link: 'quick-start' },
          { text: 'Contribution Guide', link: 'contribution' }
        ]
      },
      '/reference/': {
        base: '/reference/',
        items: [
          { text: 'Configure Multiple Appenders', link: 'use-appenders' },
          { text: 'API Request Logging with Context', link: 'use-context' },
          { text: 'Dynamic Logging Level Adjustment', link: 'use-level' },
          { text: 'Resource Cleanup Before Process Termination', link: 'use-shutdown' },
          { text: 'Performance Optimization Suggestions', link: 'performance' }
        ]
      },
      '/api/': {
        base: '/api/',
        items: generateAPISidebar('../../en/api', '')
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fengxinming/base-log-factory.git' }
    ]
  }
})