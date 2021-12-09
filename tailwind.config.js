module.exports = {
  purge: ["./src/*/.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      sha: " rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;",
    },
    extend: {
      colors: {
        brandDefault: {
          dark: "#4F4F4F",
          purple: "#7F7FD5",
          pink: "#E786D7",
        },
        brandWhite: {
          default: "#FDFDFF",
          back: "#EFF3F9",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
