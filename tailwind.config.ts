import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'prosen': {
          50: '#f2f8f9',
          100: '#e6f1f4',
          200: '#bfdde3',
          300: '#99c8d2',
          400: '#4d9fb1',
          500: '#00758f',
          600: '#006981',
          700: '#00586b',
          800: '#004656',
          900: '#003946',
        },
      },
    },
  },
  plugins: [],
} satisfies Config