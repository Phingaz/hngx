/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#120B48",
        primary400: "#413c6d",
        primary300: "#605c84",
        primary50: "#e7e7ed",
      },
      keyframes: {
        show: {
          from: { transform: "translateY(-10px)" },
          to: { transform: "translateY(0px)" },
        },
      },
      animation: {
        show: "show .3s ease",
      },
    },
  },
  plugins: [],
};
