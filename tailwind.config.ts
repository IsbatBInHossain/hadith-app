import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: '#2b9e76',
        accent: { DEFAULT: '#ebfcf6', dark: '#646464' },
        porcelain: { DEFAULT: '#eceef0', dark: '#383838' },
        'dark-gray': '#202020',
        'dark-border': '#303030',
        carbon: { DEFAULT: '#5c5c5c', dark: '#a6a6a6' },
        'hadith-bg': { DEFAULT: '#f2f4f6', dark: '#101010' },
        'hadith-bg-lite': { DEFAULT: '#fafbfb', dark: '#2c2c2c' },
      },
      fontFamily: {
        kalpurush: ['Kalpurush', ...defaultTheme.fontFamily.sans],
        KFGQPC: ['KFGQPC', ...defaultTheme.fontFamily.sans],
        sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      xs: '350px',
      sm: '640px',
      md: '1024px',
      lg: '1280px',
      xl: '1536px',
    },
  },

  plugins: [],
}
export default config
