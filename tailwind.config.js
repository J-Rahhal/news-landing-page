/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '376px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors : {
        softorange: 'hsl(35, 77%, 62%)',
        softred: 'hsl(5, 85%, 63%)',
        offwhite: 'hsl(36, 100%, 99%)',
        grayishblue: 'hsl(233, 8%, 79%)',
        darkgrayishblue: 'hsl(236, 13%, 42%)',
        verydarkblue: 'hsl(240, 100%, 5%)'
      },
    },
  },
  plugins: [],
}
