/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0F",
        surface: "#12121A",
        "surface-hover": "#1A1A25",
        border: "#1E1E2A",
        accent: "#7C8AFF",
        "accent-dim": "#4F5A99",
        teal: "#7CF2D3",
        warm: "#EDEDEA",
        muted: "#8888A0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
