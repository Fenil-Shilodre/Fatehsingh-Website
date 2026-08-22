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
          DEFAULT: "#F8FAFC",
          warm: "#F1F5F9",
          dark: "#E2E8F0",
          ice: "#EFF6FF",
        },
        charcoal: {
          light: "#1E2E52",
          DEFAULT: "#0F1D3D",
          dark: "#0A1329",
          deep: "#060B18",
        },
        royal: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#0F1E4A",
        },
        terracotta: {
          light: "#DC2626",
          DEFAULT: "#991B1B", // Deep Regal Crimson
          dark: "#7F1D1D",
        },
        gold: {
          light: "#F3DF95",   // Radiant Champagne Gold
          DEFAULT: "#D4AF37", // Imperial Gold
          dark: "#A38025",   // Burnished Gold
          muted: "#80631B",
        },
        sandstone: {
          DEFAULT: "#E2E8F0", // Clean Platinum Slate Border
          dark: "#CBD5E1",
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
