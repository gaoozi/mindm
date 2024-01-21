import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "高子的思维宝库",
  description: "我来到 我看见 我记录",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
