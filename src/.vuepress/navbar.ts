import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "主页",
    icon: "home",
    link: "/"
  },
  { 
    text: "笔记", 
    icon: "note",
    link: "/notes/" 
  },
  { 
    text: "工具", 
    icon: "tool",
    link: "/tools/" 
  },
  { 
    text: "资料", 
    icon: "repo",
    link: "/resources/" 
  },
  { 
    text: "联系方式",
    icon: "call",
    link: "/contact/" 
  },
]);
