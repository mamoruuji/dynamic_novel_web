export const typeSectionData = [
  {
    name: 'monologue',
  },
  {
    name: 'line-bubble',
  },
  {
    name: 'thought-bubble',
  },
  {
    name: 'shout-bubble',
  },
  {
    name: 'image',
  },
]

export const typePositionData = [
  {
    name: 'center',
  },
  {
    name: 'left',
  },
  {
    name: 'right',
  },
]

export const typeFontData = [
  {
    name: 'monologueFont',
  },
  {
    name: 'lineFont',
  },
  {
    name: 'gagFont',
  },
  {
    name: 'horrorFont',
  },
  {
    name: 'weakFont',
  },
  {
    name: 'cuteFont',
  },
]

export const typeSortData = [
  {
    name: 'タイトル',
    sql: 'title',
  },
  {
    name: 'ユーザ',
    sql: 'users.name',
  },
  {
    name: 'お気に入り数',
    sql: 'COUNT(marks.mark_id)',
  },
  {
    name: '初日公開日',
    sql: 'created_at',
  },
  {
    name: '更新日',
    sql: 'updated_at',
  },
  {
    name: 'ページ数',
    sql: 'COUNT(page.page_id)',
  },
  {
    name: '星評価平均',
    sql: 'AVG(impressions.rate)',
  },
  {
    name: '感想数',
    sql: 'COUNT(impressions.impression_id)',
  },
]

export const typeColorData = [
  {
    name: 'default',
  },
  {
    name: 'red',
  },
  {
    name: 'orenge',
  },
  {
    name: 'yellow',
  },
  {
    name: 'yellow-green',
  },
  {
    name: 'light-green',
  },
  {
    name: 'light-blue',
  },
  {
    name: 'blue',
  },
  {
    name: 'dark-blue',
  },
  {
    name: 'purple',
  },
  {
    name: 'pink',
  },
  {
    name: 'red-purple',
  },
]

export const typeImageData = [
  {
    name: 'cover',
    ratio: '9:16'
  },
  {
    name: 'icon',
    ratio: '1:1'
  },
  {
    name: 'illustration',
    ratio: '16:9'
  },
]

export const typeAnimationData = [
  {
    name: 'none',
  },
  {
    name: 'fade-in',
  },
  {
    name: 'fade-out',
  },
  {
    name: 'up-slide',
  },
  {
    name: 'left-slide',
  },
  {
    name: 'right-slide',
  },
  {
    name: 'down-slide',
  },
  {
    name: 'vibrate',
  },
]
