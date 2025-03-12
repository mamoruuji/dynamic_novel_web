export const formatDate = (isoString: string): string => {
  const date = new Date(isoString)

  const year = date.getFullYear()
  const month = ('0' + (date.getMonth() + 1)).slice(-2) // 月は0から始まるので1を足す
  const day = ('0' + date.getDate()).slice(-2)
  const hours = ('0' + date.getHours()).slice(-2)
  const minutes = ('0' + date.getMinutes()).slice(-2)
  const seconds = ('0' + date.getSeconds()).slice(-2)

  return `${year}/${month}/${day} ${hours}:${minutes}`
}

export const isEmptyObject = (obj: object | null | undefined): boolean =>
  !!obj && Object.keys(obj).length === 0

export const poster = (url, { arg }) =>
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  }).then((res) => res.json())

export const convertFilterDate = (string) =>
  string === 'YYYY/MM/DD' ? '' : string
export const convertKeywords = (array) => (array === '' ? [] : array.split(','))

import {
  cuteFont,
  gagFont,
  horrorFont,
  lineFont,
  monologueFont,
  weakFont,
} from 'public/fonts/fonts.ts'

export const setFont = (font) => {
  switch (font) {
    case 'lineFont':
      return lineFont.className
      break
    case 'monologueFont':
      return monologueFont.className
      break
    case 'gagFont':
      return gagFont.className
      break
    case 'horrorFont':
      return horrorFont.className
      break
    case 'weakFont':
      return weakFont.className
      break
    case 'cuteFont':
      return cuteFont.className
      break
    default:
      return 'default'
      break
  }
}

export const radioAnimations: { [key: string]: any } = {
  'fade-in': {
    initial: { opacity: 1 },
    clicked: {
      opacity: [1, 0, 1], // 1 → 0 (一瞬消す) → 1 (ゆっくり表示)
      transition: { duration: 2, times: [0, 0, 1] },
    },
    exit: { opacity: 1 },
  },
  'fade-out': {
    initial: { opacity: 1 },
    clicked: { opacity: 0, transition: { duration: 0.5 } },
    exit: { opacity: 1 },
  },
  'left-slide': {
    initial: { x: 0 },
    clicked: {
      x: [0, '-200%', 0], // 中央 → 左 → 中央
      transition: { duration: 1, times: [0, 0.1, 1], ease: 'easeOut' },
    },
    exit: { x: 0 },
  },
  'right-slide': {
    initial: { x: 0 },
    clicked: {
      x: [0, '200%', 0], // 中央 → 右 → 中央
      transition: { duration: 1, times: [0, 0.1, 1], ease: 'easeOut' },
    },
    exit: { x: 0 },
  },
  'up-slide': {
    initial: { y: 0 },
    clicked: {
      y: [0, '-1000%', 0], // 中央 → 上 → 中央
      transition: { duration: 1, times: [0, 0.1, 1], ease: 'easeOut' },
    },
    exit: { y: 0 },
  },
  'down-slide': {
    initial: { y: 0 },
    clicked: {
      y: [0, '1000%', '-1000%'], // 中央 → 下 → 上
      transition: { duration: 1, times: [0, 0.5, 1], ease: 'easeOut' },
    },
    exit: { y: '-1000%' },
  },
  vibrate: {
    initial: { x: 0 },
    clicked: {
      x: [0, 5, -5, 0, -5, 5, 0, -5, 5, 0, 5, -5, 0, 5, -5, 0, -5, 5, 0, -5],
      y: [-5, 0, 5, 0, 5, -5, 0, 5, -5, 0, -5, 0, 5, 0, -5, 5, 0, -5, 5, 0],
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
    exit: { x: 0 },
  },
  none: {
    initial: {},
    clicked: {},
    exit: {},
  },
}
