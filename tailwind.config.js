/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*{.jsx, .js}", "./src/*.js", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        acme: ["Acme", "sans-serif"],
        merri: ["Merriweather Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
