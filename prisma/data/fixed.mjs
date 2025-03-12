export const typeSectionData = [
  {
    name: 'モノローグ',
    value: 'monologue',
  },
  {
    name: 'セリフ',
    value: 'line-bubble',
  },
  {
    name: '思考',
    value: 'thought-bubble',
  },
  {
    name: '叫び',
    value: 'shout-bubble',
  },
  // {
  //   name: '吹き出し',
  //   value: 'bubble',
  // },
  {
    name: '画像',
    value: 'image',
  },
]

// export const typeBubbleData = [
//   {
//     name: 'セリフ',
//     value: 'line',
//   },
//   {
//     name: '思考',
//     value: 'thought',
//   },
//   {
//     name: '叫び',
//     value: 'shout',
//   },
// ]

export const typePositionData = [
  {
    name: '左',
    value: 'left',
  },
  {
    name: '右',
    value: 'right',
  },
]

export const typeFontData = [
  {
    name: 'シンプルな明朝（しっぽり明朝）',
    value: 'monologueFont',
  },
  {
    name: 'シンプルなゴシック（Noto Sans JP / 源ノ角ゴシック）',
    value: 'lineFont',
  },
  {
    name: 'ツッコミ用？極太ゴシック（M_PLUS_1p）',
    value: 'gagFont',
  },
  {
    name: 'ホラー（g_コミックホラー恐怖(R)-教漢版）',
    value: 'horrorFont',
  },
  {
    name: 'へなちょこ（851チカラヨワク）',
    value: 'weakFont',
  },
  {
    name: 'まんまるけっけっけ（JK丸ゴシック）',
    value: 'cuteFont',
  },
]

export const typeSortData = [
  {
    name: 'タイトル',
    value: 'dynamics.name',
  },
  {
    name: 'ユーザ',
    value: 'users.name',
  },
  {
    name: 'お気に入り数',
    value: 'COUNT(marks.mark_id)',
  },
  {
    name: '初日公開日',
    value: 'dynamics.created_at',
  },
  {
    name: '更新日',
    value: 'dynamics.updated_at',
  },
  {
    name: 'ページ数',
    value: 'COUNT(pages.page_id)',
  },
  {
    name: '星評価平均',
    value: 'AVG(impressions.rate)',
  },
  {
    name: '感想数',
    value: 'COUNT(impressions.impression_id)',
  },
]

export const typeColorData = [
  {
    name: '標準',
    value: 'default',
  },
  {
    name: '赤',
    value: 'red',
  },
  {
    name: '橙',
    value: 'orenge',
  },
  {
    name: '黄',
    value: 'yellow',
  },
  {
    name: '黄緑',
    value: 'yellow-green',
  },
  {
    name: '明緑',
    value: 'light-green',
  },
  {
    name: '明青',
    value: 'light-blue',
  },
  {
    name: '青',
    value: 'blue',
  },
  {
    name: '暗青',
    value: 'dark-blue',
  },
  {
    name: '紫',
    value: 'purple',
  },
  {
    name: '桜',
    value: 'pink',
  },
  {
    name: '赤紫',
    value: 'red-purple',
  },
]

export const typeImageData = [
  {
    name: '表紙（縦長）',
    value: '9:16'
  },
  {
    name: 'アイコン（正方形）',
    value: '1:1'
  },
  {
    name: 'イラスト（横長）',
    value: '16:9'
  },
]

export const typeAnimationData = [
  {
    name: 'なし',
    value: 'none',
  },
  {
    name: '出ぇたぁ!!',
    value: 'fade-in',
  },
  {
    name: '消え…た…?',
    value: 'fade-out',
  },
  {
    name: '上から登場',
    value: 'up-slide',
  },
  {
    name: '左から登場',
    value: 'left-slide',
  },
  {
    name: '右から登場',
    value: 'right-slide',
  },
  {
    name: '下からどこ行くねぇぇぇん！？',
    value: 'down-slide',
  },
  {
    name: 'ぶるぶるぶるぶるるるるるぅうぅうぅ',
    value: 'vibrate',
  },
]

export const typeSizeData = [
  {
    name: '8',
    value: '8',
  },
  {
    name: '12',
    value: '12',
  },
  {
    name: '16',
    value: '16',
  },
  {
    name: '24',
    value: '24',
  },
  {
    name: '32',
    value: '32',
  },
  {
    name: '40',
    value: '40',
  },
  {
    name: '60',
    value: '60',
  },
]
