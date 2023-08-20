/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/*.js"],
  theme: {
    extend: {
      keyframes: {
        'wiggle': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },

      animation: {
          'fade-in-down': 'fade-in-down 30s ease-out infinite'
      },

      colors: {
        'bg': '#2B1439',
        'head': '#C995AF',
        'txt': '#AC768F',
        'op': '#966078',
        'bk': '#7F4D61',
        'ln': '#492B5B',
        'ft': '#1a0d26',
        'ic': '#58376D'
      },
    },
  },
  plugins: [],
}

