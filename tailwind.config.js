/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paleturquoise: "#bfffff",
        blue: "#0e17f6",
        black: "#000",
        red: {
          "100": "#f00622",
          "200": "#f10909",
        },
        royalblue: {
          "100": "rgba(12, 83, 189, 0.9)",
          "200": "rgba(12, 83, 189, 0.1)",
        },
        white: "#fff",
        darkblue: "#1727bc",
        cornflowerblue: "rgba(66, 123, 209, 0.9)",
        mediumorchid: "rgba(149, 69, 186, 0.35)",
        darkslategray: "rgba(12, 85, 85, 0.1)",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      "13xl": "32px",
      "5xl": "24px",
      "17xl": "36px",
      "29xl": "48px",
      "45xl": "64px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
