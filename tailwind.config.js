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
  corePlugins: {
    preflight: false, // リセットCSSの無効化
  },
 important: '#__next', // 全てのクラスセレクタの先頭に '#app' または '#__next'を追加する
}
