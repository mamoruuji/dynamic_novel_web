/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    // optimizePackageImports: [ '@mui/icons-material' ]
  },
  // modularizeImports: {
  //   '@mui/material': {
  //     transform: '@mui/material/{{member}}',
  //   },
  //   '@mui/icons-material': {
  //     transform: '@mui/icons-material/{{member}}',
  //   },
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    // novelDetailItem: [
    //   { title: "タイトル", },
    // ],
    // searchOrderItem: [
    //   { title: "タイトル", },
    // ],
    // SNSlist: [
    //   "Twitter",
    // ],
    // readerFunclist: [
    //   "閲覧履歴",
    //   "お気に入り一覧",
    //   "メモ一覧",
    //   "感想一覧",
    // ],
    // createrFunclist: [
    //   "自分の作品",
    //   "パーツ登録",
    //   "グループ編集",
    //   "パレット追加",
    // ],
  },
}
