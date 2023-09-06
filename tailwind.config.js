/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
  theme: {
    extend: {},
  },
}
