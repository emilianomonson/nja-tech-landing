/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'nja-green': '#20e395', // El verde brillante de la "TE"
        'nja-cyan': '#00c6ff',  // El celeste/cyan de la "CH"
        'nja-dark': '#151515',  // El fondo casi negro de la pastilla
      }
    },
  },
  plugins: [],
}