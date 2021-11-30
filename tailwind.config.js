module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1441px',
      // => @media (min-width: 1441px) { ... }
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
