export const typeData = [
  {
    name: 'text',
  },
  {
    name: 'image',
  },
  {
    name: 'bubble',
  },
  {
    name: 'nandeyanen',
  },
]

export const positionData = [
  {
    name: 'left',
  },
  {
    name: 'senter',
  },
  {
    name: 'right',
  },
]

export const bubbleData = [
  {
    name: 'talk',
  },
  {
    name: 'shout',
  },
  {
    name: 'think',
  },
]

export const fontData = [
  // 明朝体
  {
    name: 'serif',
  },
  // ゴシック
  {
    name: 'sans-serif',
  },
  // 筆記
  {
    name: 'cursive',
  },
  // ファンタジー
  {
    name: 'fantasy',
  },
  // 等幅
  {
    name: 'monospace',
  },
]

export const sortData = [
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
