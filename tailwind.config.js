/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
  ],
  theme: {
    extend: {
      fontFamily: {
        mPlus1: ["var(--gag-font)"],
        sawarabiMincho: ["var(--monologue-font)"],
        shipporiAntiqueB1: ["var(--line-font)"],
      },
    },
  },
  corePlugins: {
    preflight: false, // リセットCSSの無効化
  },
 important: '#__next', // 全てのクラスセレクタの先頭に '#app' または '#__next'を追加する
}
