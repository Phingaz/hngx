/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        john: "url('./src/components/images/Poster.png')",
      },
    },
    fontFamily: {
      dm: ["DM Sans", "sans-serif"],
    },
    screens: {
      'small': '718px',
      ...defaultTheme.screens,
    }
  },
  plugins: [],
};
