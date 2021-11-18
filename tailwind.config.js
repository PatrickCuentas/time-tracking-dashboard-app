const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        primary: {
          blue: "hsl(246,80%,60%)",
          light_red: "hsl(15, 100%, 70%)",
          soft_blue: "hsl(195, 74%, 62%)",
          light_red_study: "hsl(348, 100%, 68%)",
          lime_green: "hsl(145, 58%, 55%)",
          violet: "hsl(264, 64%, 52%)",
          soft_orange: "hsl(43, 84%, 65%)",
        },
        neutral: {
          very_dark_blue: "hsl(226, 43%, 10%)",
          dark_blue: "hsl(235, 46%, 20%)",
          desatured_blue: "hsl(235, 45%, 35%)",
          pale_blue: "hsl(236, 100%, 87%)",
        },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1536px) { ... }
      },
      gridTemplateColumns: {
        // Simple 4 column grid
        4: "repeat(4, minmax(0, 250px))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
