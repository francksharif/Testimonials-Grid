/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*html"],
  theme: {
    extend: {
      colors: {
        moderateViolet: "hsl(263, 55%, 52%)",
        veryDarkBlue: "hsl(217, 19%, 35%)",
        veryDarkGray: "hsl(219, 29%, 14%)",
        white: "hsl(0, 0%, 100%)",
        lightGray: " hsl(0, 0%, 81%)",
        lightBlue: "hsl(210, 46%, 95%)",
      },

      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
