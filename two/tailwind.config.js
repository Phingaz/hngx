/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        john: "url(./src/images/Poster.png)",
      },
    },
    fontFamily: {
      dm: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
