/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        awaDeepBlue: "#002147",
        awaYellow: "#ffb800",
        awaLightGray: "#f8f9fa",
        awaDarkGray: "#333333",
        awaTextLight: "#666666",
        awaBorder: "#e0e0e0"
      },
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'], 
      },
      boxShadow: {
        'card': '0 4px 15px rgba(0, 0, 0, 0.05)',
        'cardHover': '0 10px 25px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
