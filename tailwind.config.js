module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'tablet': '441px',
      // => @media (min-width: 880px) { ... }

      'desktop': '961px',
      // => @media (min-width: 1440px) { ... }
    },
   
    extend: {
      colors: {
        'main': '#245132',
        'sec': '#6CA27F',
        'third': '#4D4D4D',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
