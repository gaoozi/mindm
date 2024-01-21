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
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
