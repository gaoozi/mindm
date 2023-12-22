import { defineConfig } from 'vitepress'
import { notes } from './routes/notes.mts'
import { tools } from './routes/tools.mts'
import { resources } from './routes/resources.mjs'
import { contact } from './routes/contact.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "江湖的思维宝库",
  lang: 'zh-cn',
  lastUpdated: true,
  description: "我来到 我看见 我记录",
  themeConfig: {
    logo: '/logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/'},
      { text: '工具', link: '/tools/' },
      { text: '资料', link: '/resources/'},
      { text: '联系方式', link: '/contact/'},
    ],

    sidebar: {
      '/notes/': notes,
      '/tools/': tools,
      '/resources/': resources,
      '/contact/': contact,
    },

    darkModeSwitchLabel: '切换主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    lastUpdated: {
      text: '更新时间'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gaoozi' }
    ],
    footer: {
      copyright: "Copyright © 2023 江湖",
    }
  },
  markdown: {
    lineNumbers: true,
  },
  ignoreDeadLinks: true,
})
