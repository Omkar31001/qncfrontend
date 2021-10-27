module.exports = {
  purge: ['./src/*/.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandDefault: {
          dark: '#4F4F4F',
          purple: '#7F7FD5',
          pink: '#E786D7',
        },
        brandWhite: {
          default: '#FDFDFF',
          back: '#EFF3F9',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};