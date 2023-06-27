import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
	plugins: [require('@tailwindcss/typography')],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Geologica', ...defaultTheme.fontFamily.sans],
			}, // @ts-ignore
			typography: ({ theme }) => ({
				sky: {
					css: {
						'--tw-prose-body': 'var(--tw-prose-invert-body)',
						'--tw-prose-headings': 'var(--tw-prose-invert-headings)',
						'--tw-prose-lead': 'var(--tw-prose-invert-lead)',
						'--tw-prose-links': 'var(--tw-prose-invert-links)',
						'--tw-prose-bold': 'var(--tw-prose-invert-bold)',
						'--tw-prose-counters': 'var(--tw-prose-invert-counters)',
						'--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
						'--tw-prose-hr': 'var(--tw-prose-invert-hr)',
						'--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
						'--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
						'--tw-prose-captions': 'var(--tw-prose-invert-captions)',
						'--tw-prose-code': 'var(--tw-prose-invert-code)',
						'--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
						'--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
						'--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
						'--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
						'--tw-prose-invert-body': theme('colors.neutral[300]'),
						'--tw-prose-invert-headings': theme('colors.white'),
						'--tw-prose-invert-lead': theme('colors.neutral[400]'),
						'--tw-prose-invert-links': theme('colors.white'),
						'--tw-prose-invert-bold': theme('colors.white'),
						'--tw-prose-invert-counters': theme('colors.neutral[400]'),
						'--tw-prose-invert-bullets': theme('colors.neutral[400]'),
						'--tw-prose-invert-hr': theme('colors.neutral[700]'),
						'--tw-prose-invert-quotes': theme('colors.neutral[100]'),
						'--tw-prose-invert-quote-borders': theme('colors.neutral[700]'),
						'--tw-prose-invert-captions': theme('colors.neutral[400]'),
						'--tw-prose-invert-code': theme('colors.white'),
						'--tw-prose-invert-pre-code': theme('colors.neutral[300]'),
						'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
						'--tw-prose-invert-th-borders': theme('colors.neutral[600]'),
						'--tw-prose-invert-td-borders': theme('colors.neutral[700]'),
					},
				},
			}),
		},
	},
};
