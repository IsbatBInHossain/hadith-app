import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2b9e76',
        accent: '#ebfcf6',
        'hadith-bg': '#f2f4f6',
        'hadith-bg-lite': '#fafbfb',
      },
    },
    screens: {
      sm: '350px',
      md: '1024px',
      lg: '1280px',
      xl: '1536px',
    },
    fontFamily: {
      kalpurush: ['Kalpurush', ...defaultTheme.fontFamily.sans],
      KFGQPC: ['KFGQOC Uthmanic Script', ...defaultTheme.fontFamily.sans],
    },
  },

  plugins: [],
}
export default config
