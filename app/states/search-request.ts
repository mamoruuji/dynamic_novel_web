import { atom, atomFamily, selector } from 'recoil'

export const searchKeywordsAtom = atom<string[]>({
  key: 'searchKeywordsAtom',
  default: [],
})

export const sortCategoryAtom = atom<string>({
  key: 'sortCategoryAtom',
  default: 4, // '更新日'
})

export const sortOrderAtom = atom<string>({
  key: 'sortOrder',
  default: 'asc',
})

export const filterKeywordsAtom = atom<string[]>({
  key: 'filterKeywordsAtom',
  default: [],
})

export const filterStartDateAtom = atom<string>({
  key: 'filterStartDateAtom',
  default: '',
})

export const filterEndDateAtom = atom<string>({
  key: 'filterEndDateAtom',
  default: '',
})
