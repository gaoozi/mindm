import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '高子的知识宝库',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			social: {
				github: 'https://github.com/gaoozi',
			},
			sidebar: [
				{
					label: '学习资料',
					items: [
						{ label: '编程语言', link: '/resources/lang/' },
						{ label: '博客', link: '/resources/blog/' },
						{ label: '社区', link: '/resources/community/' },
						{ label: '周刊', link: '/resources/weekly/' },
					],
				},
        {
          label: '工具',
          link: '/tools/',
        },
			],
			  head: [
			    {
			      tag: 'script',
			      attrs: {
			        src: 'https://umami.gaodb.cc/js/script.js',
			        "data-domain": "gaoozi.cc",
			        defer: true,
			      },
			    },
			  ],
		}),
	],
});
