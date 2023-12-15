import { defineConfig } from 'vitepress'
import { notes } from './routes/notes.mts'
import { tools } from './routes/tools.mts'
import { help } from './routes/help.mts'
import { contact } from './routes/contact.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "江湖的思维宝库",
  description: "我来到 我看见 我记录",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '笔记', link: '/notes/'},
      { text: '工具', link: '/tools/' },
      { text: '帮助', link: '/help/'},
      { text: '联系方式', link: '/contact/'},
    ],

    sidebar: {
      '/notes': notes,
      '/tools': tools,
      '/help': help,
      '/contact': contact,
    },

    darkModeSwitchLabel: '切换主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gaoozi' }
    ]
  }
})
