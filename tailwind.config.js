module.exports = {
  purge: {
    // enabled: false,
    enabled: true,
    content: [
      'Case/index.html',
      'Home/index.html',
    ],
  },



  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },

    extend: {
      colors: {
        'main': '#245132',
        'sec': '#6CA27F',
        'third': '#4D4D4D',
        'gray-80':'#808080',
        'gray-99':'#999999',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
