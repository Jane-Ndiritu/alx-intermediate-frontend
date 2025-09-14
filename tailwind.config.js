module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#339941", // Green
        "primary-dark": "#627063", // Muted Green
        secondary: "#712F22", // Dark Red/Brown
        "secondary-dark": "#8C3421", // Dark Orange/Brown
        accent: "#39984A", // Bright Green
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};