import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FAF5EB",
          2: "#F3EBD7",
          warm: "#F3EBD7",
          3: "#FEFBF3",
          light: "#FEFBF3",
          dark: "#E7DEC9",
        },
        paper: {
          DEFAULT: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#1A2540",
          2: "#3B4763",
          secondary: "#3B4763",
          muted: "#6B7385",
          deep: "#0F1B33",
        },
        emerald: {
          DEFAULT: "#0F4A3C",
          2: "#1B6B54",
          3: "#22876A",
          50: "#F0FDF8",
          100: "#DBFCEE",
          200: "#B9F8DD",
          300: "#7EEEC1",
          400: "#3ED9A0",
          500: "#22876A",
          600: "#1B6B54",
          700: "#0F4A3C",
          800: "#0C3C31",
          900: "#092E26",
          950: "#041C17",
        },
        gold: {
          DEFAULT: "#B8860B",
          2: "#C69749",
          3: "#E4C77A",
          light: "#FFE8A8",
          muted: "#A2760A",
          dark: "#996D00",
        },
        sand: {
          DEFAULT: "#E7DEC9",
          2: "#D9CDAE",
          dark: "#C5B899",
        },
        terracotta: {
          DEFAULT: "#B45C39",
          light: "#C87352",
          dark: "#974627",
        },
        slate: {
          body: "#4A5568",
          muted: "#6B7385",
        },
        charcoal: {
          light: "#242938",
          DEFAULT: "#1A2540",
          dark: "#0F1B33",
          deep: "#090D0F",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "'Cinzel'", "'Noto Serif Gujarati'", "Georgia", "serif"],
        "serif-display": ["'Cinzel'", "'Playfair Display'", "'Noto Serif Gujarati'", "Georgia", "serif"],
        cinzel: ["'Cinzel'", "'Playfair Display'", "serif"],
        sans: ["'Plus Jakarta Sans'", "'Inter'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        hindi: ["'Noto Serif Devanagari'", "'Playfair Display'", "serif"],
        "hindi-sans": ["'Noto Sans Devanagari'", "'Plus Jakarta Sans'", "'Inter'", "sans-serif"],
        gujarati: ["'Noto Serif Gujarati'", "'Playfair Display'", "serif"],
        "gujarati-sans": ["'Noto Sans Gujarati'", "'Plus Jakarta Sans'", "'Inter'", "sans-serif"],
      },
      boxShadow: {
        paper: "0 1px 2px rgba(26, 37, 64, 0.04), 0 12px 30px -18px rgba(26, 37, 64, 0.12)",
        "paper-hover": "0 2px 4px rgba(184, 134, 11, 0.05), 0 22px 40px -22px rgba(15, 74, 60, 0.22)",
        emerald: "0 10px 26px -12px rgba(15, 74, 60, 0.55)",
        "emerald-lg": "0 16px 34px -14px rgba(15, 74, 60, 0.65)",
      },
    },
  },
  plugins: [],
};
export default config;
