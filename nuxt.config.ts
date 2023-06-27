// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindTypography from '@tailwindcss/typography';
import DefaultTheme from 'tailwindcss/defaultTheme';

export default defineNuxtConfig({
	devtools: { enabled: true },
	ssr: false,

	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
		'@nuxt/content',
		'dayjs-nuxt',
	],

	googleFonts: {
		families: {
			Geologica: {
				wght: [100, 200, 300, 400, 500, 600, 700, 800],
			},
		},
	},

	tailwindcss: {
		config: {
			content: [],

			fontFamily: {
				sans: ['Geologica', ...DefaultTheme.fontFamily.sans],
			},
		},
	},
});
