/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paleturquoise: "#bfffff",
        royalblue: {
          "100": "rgba(12, 83, 189, 0.9)",
          "200": "rgba(12, 83, 189, 0.1)",
        },
        white: "#fff",
        red: "#f00622",
        cornflowerblue: "rgba(66, 123, 209, 0.9)",
        black: "#000",
        darkslategray: "rgba(12, 85, 85, 0.1)",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
