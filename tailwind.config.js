/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'], 
  theme: {
    extend: {
      boxShadow: {
        custom: '4px 4px 24px 0px rgba(0, 0, 0, 0.10)',
        custom1: '2px 4px 16px 0px rgba(0, 0, 0, 0.15)'
      },
      borderRadius: {
        custom: '67px 40px 40px 40px',
        custom1: '24px 24px 0px 0px',
        custom2: '0px 0px 24px 24px',
      },
      borderColor: {
        custom: 'rgba(0, 0, 0, 0.30)',
      }
    },
  },
  plugins: [],
}

