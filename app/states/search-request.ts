import { atom, atomFamily, selector } from 'recoil'
import { ListDynamicsType } from '@/type/'

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

export const dynamicsAtom = atom<ListDynamicsType[]>({
  key: 'dynamicsAtom',
  default: [],
})

export const dynamicAtom = atom<GetDynamicType>({
  key: 'dynamicAtom',
  default: {},
})

export const chaptersAtom = atom<GetChaptersType[]>({
  key: 'chaptersAtom',
  default: [],
})

export const chapterAtom = atom<GetChapterType>({
  key: 'chapterAtom',
  default: {},
})

export const pagesAtom = atomFamily<GetPagesType[] | null, number>({
  key: 'pagesAtom',
  default: [],
})

export const pageAtom = atom<GetpageType>({
  key: 'pageAtom',
  default: {},
})

export const termsAtom = atomFamily<GetTermsType[] | null, string>({
  key: 'termsAtom',
  default: [],
})
