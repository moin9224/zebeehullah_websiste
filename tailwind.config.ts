import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: "#f5f4f0",
        paper: "#ffffff",
        ink: "#1c1c1c",
        charcoal: "#000000",
        fossil: "#706f6c",
        pebble: "#9e9b94",
        smoke: "#3c3c3c",
        sand: "#eae6e1",
        ash: "#d2cec6",
        chartreuse: {
          DEFAULT: "#dbf570",
          light: "#e7faa0",
          dark: "#c2dc50",
        },
        olive: "#4b5b0a",
        lavender: "#b8a3ff",
      },
      fontFamily: {
        serif: ["var(--font-phonic)", "Newsreader", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        arabic: ["var(--font-arabic)", "Amiri", "Scheherazade New", "serif"],
        urdu: ["var(--font-urdu)", "Noto Nastaliq Urdu", "Amiri", "serif"],
      },
      fontSize: {
        'caption': ['12px', { lineHeight: '1.3', letterSpacing: '0.36px' }],
        'body-sm': ['14px', { lineHeight: '1.4', letterSpacing: '-0.14px' }],
        'body-base': ['16px', { lineHeight: '1.5', letterSpacing: '-0.2px' }],
        'body-lg': ['17px', { lineHeight: '1.45', letterSpacing: '-0.34px' }],
        'heading-sm': ['22px', { lineHeight: '1.15', letterSpacing: '-0.66px' }],
        'heading': ['28px', { lineHeight: '1.1', letterSpacing: '-1.12px' }],
        'heading-lg': ['46px', { lineHeight: '1.1', letterSpacing: '-2.3px' }],
        'display': ['58px', { lineHeight: '1.05', letterSpacing: '-3.48px' }],
        'display-lg': ['90px', { lineHeight: '1.0', letterSpacing: '-6.3px' }],
        'hero': ['130px', { lineHeight: '1.0', letterSpacing: '-11.7px' }],
      },
      borderRadius: {
        'badges': '4px',
        'inputs': '8px',
        'buttons': '8px',
        'cards': '12px',
        'largecards': '16px',
        'tabs': '8px',
      },
      boxShadow: {
        'maze-subtle': '0 1px 2px rgba(0, 0, 0, 0.04)',
      },
      maxWidth: {
        'page': '1200px',
      },
    },
  },
  plugins: [],
};
export default config;
