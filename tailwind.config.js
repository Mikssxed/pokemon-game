/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: colors.white,
      black: colors.black,
      purple: {
        900: "rgb(39, 30, 101)",
      },
      gold: {
        700: "#daa520",
        600: "#ffd700",
      },
      grey: {
        600: "#808080",
      },
    },
  },
  plugins: [],
};
