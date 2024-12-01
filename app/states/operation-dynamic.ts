import { atomFamily } from 'jotai/utils'
import { atom } from 'jotai'

export const titleAtom = atom('')

export const overviewAtom = atom('')

export const dynamicAtom = atom({})

export const chaptersAtom = atom([])

export const chapterAtom = atom({})

export const pagesAtom = atomFamily((key) => {
  return atom([]) // 各キーに対するデフォルト値を指定
})

export const pageAtom = atom({})

export const termsAtom = atomFamily((key) => {
  return atom([]) // 各キーに対するデフォルト値を指定
})

// export const tagsAtom = atom([])
