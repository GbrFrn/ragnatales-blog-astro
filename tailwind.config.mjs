/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            '--tw-prose-body': 'inherit',
            '--tw-prose-headings': 'inherit',
            '--tw-prose-lead': 'inherit',
            '--tw-prose-links': '#3182ce',
            '--tw-prose-bold': 'inherit',
            '--tw-prose-counters': 'inherit',
            '--tw-prose-bullets': 'inherit',
            '--tw-prose-hr': 'inherit',
            '--tw-prose-quotes': 'inherit',
            '--tw-prose-quote-borders': 'inherit',
            '--tw-prose-captions': 'inherit',
            '--tw-prose-code': 'inherit',
            '--tw-prose-pre-code': 'rgb(229, 231, 235)',
            '--tw-prose-pre-bg': 'rgb(31, 41, 55)',
            '--tw-prose-th-borders': 'inherit',
            '--tw-prose-td-borders': 'inherit',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            strong: {
              color: 'inherit',
              fontWeight: '600',
            },
            ol: {
              li: {
                '&::marker': {
                  color: 'inherit',
                  fontWeight: '400',
                },
                color: 'inherit',
              },
            },
            ul: {
              li: {
                '&::marker': {
                  color: 'inherit',
                  fontWeight: '400',
                },
                color: 'inherit',
                '> *': {
                  color: 'inherit',
                },
              },
            },
            hr: {
              borderColor: 'inherit',
              opacity: 0.3,
            },
            blockquote: {
              borderLeftColor: 'inherit',
              opacity: 0.8,
              color: 'inherit',
              fontStyle: 'italic',
            },
            h1: {
              color: 'inherit',
              fontWeight: '800',
            },
            h2: {
              color: 'inherit',
              fontWeight: '700',
            },
            h3: {
              color: 'inherit',
              fontWeight: '600',
            },
            h4: {
              color: 'inherit',
              fontWeight: '600',
            },
            p: {
              color: 'inherit',
            },
            'p > *': {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'rgb(31, 41, 55)',
              code: {
                color: 'rgb(229, 231, 235)',
              },
            },
            thead: {
              borderBottomColor: 'inherit',
              th: {
                color: 'inherit',
              },
            },
            tbody: {
              tr: {
                borderBottomColor: 'inherit',
              },
              td: {
                color: 'inherit',
              },
            },
            figure: {
              figcaption: {
                color: 'inherit',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}