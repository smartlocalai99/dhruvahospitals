/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF3FB",
          100: "#DCE7F7",
          200: "#B7CDEE",
          300: "#8FB0E3",
          400: "#5A85D2",
          500: "#2F5CB0",
          600: "#1C4590",
          700: "#123E7D",
          800: "#0E3168",
          900: "#0A2650",
        },
        brandred: {
          500: "#E13B3B",
          600: "#C82F2F",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
