/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  env: {
    novelDetailItem: [
      "タイトル",
    ],
    searchOrderItem: [
      "タイトル",
    ],
    SNSlist: [
      "Twitter",
    ],
    readerFunclist: [
      "閲覧履歴",
      "お気に入り一覧",
      "メモ一覧",
      "感想一覧",
    ],
    createrFunclist: [
      "自分の作品",
      "パーツ登録",
      "グループ編集",
      "パレット追加",
    ],
  }
}

module.exports = nextConfig
