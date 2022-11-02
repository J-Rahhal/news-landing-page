/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '376px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      gridColumnStart: {
        '1' : '1'
      },
      gridColumnEnd: {
        '3' : '3'

      },

    },
  },
  plugins: [],
}
