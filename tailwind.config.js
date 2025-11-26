/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{ejs,html}", //vistas EJS o HTML
    "./public/**/*.html",      // si hay archivos html públicos
    "./src/**/*.{js,ts}",      // si se usa JS o TS en el frontend
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};