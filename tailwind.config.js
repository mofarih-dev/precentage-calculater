/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    theme: {
      container: {
        center: true,
      },
      minWidth: {
        "1/2": `50%`,
        "1/3": `33.33333%`,
        "2/3": `66.666666%`,
        "1/4": `25%`,
        "2/4": `50%`,
        "3/4": `75%`,
        "1/5": `20%`,
        "1.5/5": `30%`,
        "2/5": `40%`,
        "3/5": `60%`,
        "3.5/5": `70%`,
        "4/5": `80%`,
        full: `100%`,
      },
      maxWidth: {
        "1/2": `50%`,
        "1/3": `33.33333%`,
        "2/3": `66.666666%`,
        "1/4": `25%`,
        "2/4": `50%`,
        "3/4": `75%`,
        "1/5": `20%`,
        "1.5/5": `30%`,
        "2/5": `40%`,
        "3/5": `60%`,
        "3.5/5": `70%`,
        "4/5": `80%`,
        full: `100%`,
      },
      extend: {
        backdropBlur: {
          xs: "2px",
          "4xl": `100px`,
        },
        blur: {
          "4xl": `100px`,
        },
      },
    },
    extend: {},
  },
  plugins: [],
};