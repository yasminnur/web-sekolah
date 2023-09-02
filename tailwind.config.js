/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'], 
  theme: {
    extend: {
      boxShadow: {
        custom: '4px 4px 24px 0px rgba(0, 0, 0, 0.10)',
      },
      borderRadius: {
        custom: '67px 40px 40px 40px',
      }
    },
  },
  plugins: [],
}

