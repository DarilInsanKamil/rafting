/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/image/hero.png')",
      },
    },
  },
  plugins: [],
}

