import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas:    ["var(--font-bebas)", "Bebas Neue", "sans-serif"],
        dmsans:   ["var(--font-dmsans)", "DM Sans", "sans-serif"],
        sans:     ["var(--font-dmsans)", "DM Sans", "sans-serif"],
        playfair: ["var(--font-playfair)", "Playfair Display", "serif"],
        display:  ["var(--font-bebas)", "Bebas Neue", "sans-serif"],
      },
      colors: {
        background:    "var(--background)",
        foreground:    "var(--foreground)",
        primary:       "#06DC16",
        "aura-accent": "#06DC16",
        "aura-dark":   "var(--dark)",
        "aura-darker": "var(--darker)",
      },
      keyframes: {
        animationIn: {
          "0%":   { opacity: "0", transform: "translateY(30px)", filter: "blur(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)",    filter: "blur(0)" },
        },
      },
      animation: {
        animationIn: "animationIn 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
