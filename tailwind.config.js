/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        surface: "#0C0C0C",
        "surface-2": "#141414",
        border: "#222222",
        accent: "#FF6B1A",
        "accent-dim": "#7A3210",
        warm: "#F5F5F0",
        muted: "#606060",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
