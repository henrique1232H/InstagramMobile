/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
  "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFF"
      },

      fontSize: {
        Ubuntu: "Ubuntu_700Bold"
      }
    },
  },
  plugins: [],
}
