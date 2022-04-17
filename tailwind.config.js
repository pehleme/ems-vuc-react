module.exports = {
  content: ["./index.html", "./src/**/*.{tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#00bcd4",
          dark: "#00acc1",
          light: "#00e5ff",
        },
      },
    },
  },
  plugins: [],
};
