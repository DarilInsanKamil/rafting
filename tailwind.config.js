/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/image/hero.png')",
      },
      height:{
        'img-hidden': 566
      },
      spacing: {
        'img-hidden': 454
      }
    },
  },
  plugins: [],
}

