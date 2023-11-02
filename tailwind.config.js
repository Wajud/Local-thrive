/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'background': '#D4DDCC',
        'navbar-footer': '#2A3D19',
        'button-success': '#295700',
        'rectangle-411':'FFFFFF',
        'error': '#E60E1B',
        'card': '#DCAE96',
      },
      fontFamily: {
        headers: ['Crimson', 'sans-serif'],
        body_text: ['Montserrat']
      },
      borderRadius: {
        '8xl': '8rem',
        '6xl': '6rem',
      }
    },
  },
  plugins: [],
}