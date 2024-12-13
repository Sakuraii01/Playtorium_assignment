/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      black: colors.black,
      white: colors.white,

      primary: colors.indigo,
      secondary: colors.purple,

      red: colors.red,
      gray: colors.zinc,
      green: colors.emerald,
      yellow: colors.amber,
    },
  },
  plugins: [],
};
