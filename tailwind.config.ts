import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f7f1e8",
        paper: "#fbf8f3",
        iris: "#8e72c7",
        mist: "#d8c8ef",
        ink: "#161515",
        mauve: "#766a83"
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Avenir", "Helvetica Neue", "Arial", "sans-serif"],
        hand: ["Segoe Script", "Bradley Hand ITC", "cursive"]
      }
    }
  },
  plugins: []
} satisfies Config;
