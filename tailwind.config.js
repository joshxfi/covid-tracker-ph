module.exports = {
  purge: ["./index.html", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        pops: "Poppins, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
