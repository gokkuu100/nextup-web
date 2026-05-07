import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:     ["var(--font-inter)", "Inter", "sans-serif"],
        jakarta:  ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        geist:    ["var(--font-inter)", "Inter", "sans-serif"],
        playfair: ["var(--font-playfair)", "Playfair Display", "serif"],
        display:  ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        background:    "#F2EFEA",
        foreground:    "#1D2331",
        "aura-accent": "#C48C56",
        "aura-dark":   "#1D2331",
        "aura-darker": "#0F1219",
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
