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
          DEFAULT: "#FFFDF9",
          warm: "#FAF5EE",
          dark: "#F3ECE0",
          ice: "#FFF7ED",
        },
        charcoal: {
          light: "#242938",
          DEFAULT: "#151924",
          dark: "#0E111A",
          deep: "#080A10",
        },
        orange: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316", // Vibrant Saffron Orange
          600: "#EA580C", // Rich Royal Orange
          700: "#C2410C", // Deep Rust Orange
          800: "#9A3412",
          900: "#7C2D12",
          950: "#431407",
        },
        amber: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B", // Radiant Golden Amber
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        terracotta: {
          light: "#FB923C",
          DEFAULT: "#EA580C", // Rich Saffron Orange for buttons
          dark: "#C2410C",
        },
        gold: {
          light: "#FDE68A",   // Radiant Amber Gold
          DEFAULT: "#F59E0B", // Imperial Amber Gold
          dark: "#D97706",   // Burnished Amber Gold
          muted: "#B45309",
        },
        royal: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
          950: "#431407",
        },
        sandstone: {
          DEFAULT: "#EFE6D8", // Warm Sandstone / Ivory Slate
          dark: "#D6C7B2",
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
