/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: ['theme1', 'theme2', 'theme3'],
  theme: {
    extend: {
      colors: {
        'theme1-bg': '#f9f9f9',
        'theme1-text': '#111',
        'theme2-bg': '#111827',
        'theme2-text': '#ffffff',
        'theme3-bg': '#ffefd5',
        'theme3-text': '#7b2cbf',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        pacifico: ['Pacifico', 'cursive'], // ✅ FIXED here
      },
    },
  },
  plugins: [],
}
