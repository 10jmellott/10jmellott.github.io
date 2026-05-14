// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	app: {
		head: {
			title: 'Mellott-Lillie | Resume',
		},
	},
	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/hints',
		'@nuxt/icon',
		'@nuxt/a11y',
	],
	ssr: false,
	router: {
		options: {
			hashMode: true,
		},
	},
	vite: {
		define: {
			__VUE_OPTIONS_API__: 'false',
		},
	},
	fonts: {
		defaults: {
			weights: [100, 400, 700],
			styles: ['normal', 'italic'],
		},
	},
	icon: {
		customCollections: [
			{
				prefix: 'icons',
				dir: './app/assets/icons',
				recursive: true,
			},
		],
	},
});
