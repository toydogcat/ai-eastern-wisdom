// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://toydogcat.github.io',
	base: '/ai-eastern-wisdom',
	integrations: [
		starlight({
			title: '東方智慧｜道法自然',
			description: '探索道德經、帛書德道經的智慧，附白話文解析，以現代眼光品讀古典哲學。',
			defaultLocale: 'zh-tw',
			locales: {
				root: {
					label: '繁體中文',
					lang: 'zh-TW',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/toydogcat/ai-eastern-wisdom' },
			],
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: '🌸 關於本站',
					slug: 'about',
				},
				{
					label: '📖 道德經（流傳版）',
					items: [
						{ label: '簡介', slug: 'dao-de-jing' },
						{
							label: '道經・第一至三十七章',
							collapsed: false,
							items: [
								{ label: '第一章・道可道', slug: 'dao-de-jing/dao/01' },
								{ label: '第二章・天下皆知', slug: 'dao-de-jing/dao/02' },
								{ label: '第三章・不尚賢', slug: 'dao-de-jing/dao/03' },
								{ label: '第四章・道沖', slug: 'dao-de-jing/dao/04' },
								{ label: '第五章・天地不仁', slug: 'dao-de-jing/dao/05' },
								{ label: '第六章・谷神不死', slug: 'dao-de-jing/dao/06' },
								{ label: '第七章・天長地久', slug: 'dao-de-jing/dao/07' },
								{ label: '第八章・上善若水', slug: 'dao-de-jing/dao/08' },
								{ label: '第九章・持而盈之', slug: 'dao-de-jing/dao/09' },
								{ label: '第十章・載營魄抱一', slug: 'dao-de-jing/dao/10' },
								{ label: '第十一章・三十輻', slug: 'dao-de-jing/dao/11' },
								{ label: '第十二章・五色令人目盲', slug: 'dao-de-jing/dao/12' },
								{ label: '第十三章・寵辱若驚', slug: 'dao-de-jing/dao/13' },
								{ label: '第十四章・視之不見', slug: 'dao-de-jing/dao/14' },
								{ label: '第十五章・古之善為士', slug: 'dao-de-jing/dao/15' },
								{ label: '第十六章・致虛極', slug: 'dao-de-jing/dao/16' },
								{ label: '第十七章・太上', slug: 'dao-de-jing/dao/17' },
								{ label: '第十八章・大道廢', slug: 'dao-de-jing/dao/18' },
								{ label: '第十九章・絕聖棄智', slug: 'dao-de-jing/dao/19' },
								{ label: '第二十章・絕學無憂', slug: 'dao-de-jing/dao/20' },
								{ label: '第二十一章・孔德之容', slug: 'dao-de-jing/dao/21' },
								{ label: '第二十二章・曲則全', slug: 'dao-de-jing/dao/22' },
								{ label: '第二十三章・希言自然', slug: 'dao-de-jing/dao/23' },
								{ label: '第二十四章・企者不立', slug: 'dao-de-jing/dao/24' },
								{ label: '第二十五章・有物混成', slug: 'dao-de-jing/dao/25' },
								{ label: '第二十六章・重為輕根', slug: 'dao-de-jing/dao/26' },
								{ label: '第二十七章・善行無轍迹', slug: 'dao-de-jing/dao/27' },
								{ label: '第二十八章・知其雄', slug: 'dao-de-jing/dao/28' },
								{ label: '第二十九章・將欲取天下', slug: 'dao-de-jing/dao/29' },
								{ label: '第三十章・以道佐人主', slug: 'dao-de-jing/dao/30' },
								{ label: '第三十一章・夫佳兵者', slug: 'dao-de-jing/dao/31' },
								{ label: '第三十二章・道常無名', slug: 'dao-de-jing/dao/32' },
								{ label: '第三十三章・知人者智', slug: 'dao-de-jing/dao/33' },
								{ label: '第三十四章・大道氾兮', slug: 'dao-de-jing/dao/34' },
								{ label: '第三十五章・執大象', slug: 'dao-de-jing/dao/35' },
								{ label: '第三十六章・將欲歙之', slug: 'dao-de-jing/dao/36' },
								{ label: '第三十七章・道常無為', slug: 'dao-de-jing/dao/37' },
							],
						},
						{
							label: '德經・第三十八至八十一章',
							collapsed: true,
							autogenerate: { directory: 'dao-de-jing/de' },
						},
					],
				},
				{
					label: '📜 帛書德道經',
					items: [
						{ label: '簡介與版本說明', slug: 'boshu' },
						{
							label: '德經（帛書上篇）',
							collapsed: true,
							autogenerate: { directory: 'boshu/de' },
						},
						{
							label: '道經（帛書下篇）',
							collapsed: true,
							autogenerate: { directory: 'boshu/dao' },
						},
					],
				},
			],
		}),
	],
});
