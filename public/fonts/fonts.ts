import localFont from 'next/font/local'
import { M_PLUS_1p, Noto_Sans_JP, Shippori_Antique_B1 } from 'next/font/google'

export const lineFont = Shippori_Antique_B1({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--line-font',
})

export const monologueFont = Noto_Sans_JP({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--monologue-font',
})

export const gagFont = M_PLUS_1p({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--gag-font',
})

export const horrorFont = localFont({
  src: [
    {
      path: './g_comichorrorR_freeR.ttf',
      variable: '--horror-font',
    },
  ],
})

export const weakFont = localFont({
  src: [
    {
      path: './851CHIKARA-YOWAKU_002.ttf',
      variable: '--weak-font',
    },
  ],
})

export const cuteFont = localFont({
  src: [
    {
      path: './JK-Maru-Gothic-M.otf',
      variable: '--cute-font',
    },
  ],
})
