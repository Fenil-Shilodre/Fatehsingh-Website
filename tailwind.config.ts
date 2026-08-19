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
          DEFAULT: "#FAF8F5",
          warm: "#F5F0E6",
          dark: "#EFE8DA",
        },
        charcoal: {
          light: "#2C343E",
          DEFAULT: "#1E242B",
          dark: "#12161A",
          deep: "#0B0E11",
        },
        terracotta: {
          light: "#D46D55",
          DEFAULT: "#B8533C",
          dark: "#8F3A26",
        },
        gold: {
          light: "#DFC38A",
          DEFAULT: "#C5A059",
          dark: "#A37E39",
          muted: "#8F7236",
        },
        forest: {
          light: "#2E5C45",
          DEFAULT: "#1B3B2B",
          dark: "#122A1E",
        },
        sandstone: {
          DEFAULT: "#E6DFC8",
          dark: "#D6CCA8",
        }
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        cinzel: ["Cinzel", "serif"],
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        hindi: ["Noto Serif Devanagari", "sans-serif"],
        gujarati: ["Noto Serif Gujarati", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
