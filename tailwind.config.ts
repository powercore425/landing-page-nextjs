import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        paper: '#F7F7F7',
        ink: '#00025E',
        midnight: '#00013B',
        gold: '#DFB86A',
        grey: '#707070',
        border: '#CCCCDF',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      fontSize: {
        'p-reg': ['16px', { lineHeight: '160%' }],
        'p-lg': ['20px', { lineHeight: '160%' }],
        'p-sm': ['14px', { lineHeight: '160%' }],
        'h1': ['52px', { lineHeight: '110%' }],
        'h2': ['38px', { lineHeight: '130%' }],
        'h3': ['30px', { lineHeight: '130%' }],
        'h4': ['22px', { lineHeight: '140%' }],
        'pre-title': ['16px', { lineHeight: '150%', letterSpacing: '0.1em' }],
      },
      borderRadius: {
        '4': '4px',
        '20': '20px',
      },
    },
  },
  plugins: [],
};
export default config;
