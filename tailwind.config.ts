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
        bone: "#FAF8F5",       // Warm Ivory Canvas
        paper: "#ffffff",      // Pure White Paper
        ink: "#121E19",        // Deep Scholar Obsidian (emerald undertone)
        charcoal: "#07120E",   // True Deep Charcoal
        fossil: "#5F6B65",     // Muted Sage Slate
        pebble: "#8A948E",     // Light Muted Gray
        smoke: "#2D3B34",      // Deep Forest Slate
        sand: "#EFECE4",       // Warm Parchment Sand
        ash: "#D8D2C4",        // Antique Hairline Border
        emerald: {
          deep: "#07120E",
          DEFAULT: "#0F382A",  // Royal Islamic Emerald
          light: "#164E3D",
          soft: "#EBF4F0",     // Mint/Sage Mist
        },
        gold: {
          DEFAULT: "#C5A869",  // Antique Champagne Gold
          light: "#DFCCA0",
          dark: "#96783B",
          subtle: "#F7F3E8",   // Warm Gold Tint
        },
        chartreuse: {
          DEFAULT: "#C5A869",  // Mapped to Gold for backward-compatibility
          light: "#DFCCA0",
          dark: "#96783B",
        },
        olive: "#0F382A",
        lavender: "#EBF4F0",   // Mapped to Soft Emerald
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
