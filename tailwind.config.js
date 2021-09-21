module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // "xs": "400px",
      "3x1": "1920px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
