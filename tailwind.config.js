/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '14px',
      screens: {
        sm: '1200px'
      }
    },
    fontFamily: {
      rubik: ['Rubik']
    },
    extend: {
      colors: {
        primary1: '#FFBE34',
        primary2: '#091242',
        secondary: '#F4F4F4',
        headingFont: '#1C1F35',
        paragraphFont: '#666C89'
      },
      backgroundImage: {
        "my-gradient": "linear-gradient(to right, #FFB629 0%, #FFDA56 50%, #FFD7A6 100%)"
      }
    },
  },
  plugins: [],
}

