const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'cyber-white': '#FFFAED',
        'cyber-black': '#1E1E1E',
        'cyber-yellow': '#FFE69D',
        'cyber-dark': '#6A50A7',
        'cyber-dim': '#8067B7'
      },
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        ubuntu: ['Ubuntu', ...defaultTheme.fontFamily.sans],
        poiretone: ['Poiret One', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {
    opacity: ['disabled']
  },
  plugins: [],
}
