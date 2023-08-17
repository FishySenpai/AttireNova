/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  variants: {
    display: ["responsive", "group-hover", "group-focus"],
  },
  theme: {
    extend: {
      screens: {
        "3xl": "1665px",
      },
    },
  },
  plugins: [],
};
