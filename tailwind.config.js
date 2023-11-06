/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,}",],
  theme: {
    extend: {colors: {
        primary: "#81E67D",
        primary_dark: "#0A5D60",
        secondary: "#253939",
        secondary_dark: "#CAE6E6",
        neutral: "#FFE046",
        text: "#F4F4F4",
        text_dark: "#32FFFF",
        bg: "#212121",
        bg_dark: "#101414",
        border: "",
        /////
        /////
        /////
      },
      // fontFamily: {
      //   custom1: ["Jura", "sans-serif"],
      //   custom2: ["Inconsolata", "monospace"],
      // },
    },
  },
  plugins: [],
}

