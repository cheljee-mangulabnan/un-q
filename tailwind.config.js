/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'anonymous-pro': ['Anonymous Pro'],
        barlow: ['Barlow'],
      },
      colors: {
        cream: '#FDFAEC',
      },
    },
  },
  plugins: [],
}
