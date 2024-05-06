import localFont from 'next/font/local'
import {
  M_PLUS_1p,
  Sawarabi_Mincho,
  Noto_Sans_JP,
  Shippori_Antique_B1,
} from 'next/font/google'

// アンチック 喋り
export const antiqueFont = Shippori_Antique_B1({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--antique-font',
})

// 明朝体 心の中の声
export const minchoFont = Noto_Sans_JP({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--mincho-font',
})

// ゴシック体 ギャグ調
export const gothicFont = M_PLUS_1p({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--gothic-font',
})

// 古印字 ホラー
export const horrorFont = localFont({
  src: [
    {
      path: './g_comichorrorR_freeR.ttf',
      variable: '--horror-font',
    },
  ],
})

// ふにゃふにゃ 泣きそう
export const weakFont = localFont({
  src: [
    {
      path: './851CHIKARA-YOWAKU_002.ttf',
      variable: '--weak-font',
    },
  ],
})

// かわいい
export const cuteFont = localFont({
  src: [
    {
      path: './JK-Maru-Gothic-M.otf',
      variable: '--cute-font',
    },
  ],
})
