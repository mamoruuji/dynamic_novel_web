import { atom, atomFamily, selector } from 'recoil'
import { ListDynamicsType } from '@/type/'

export const titleAtom = atom<string>({
  key: 'titleAtom',
  default: '',
})

export const overviewAtom = atom<string>({
  key: 'overviewAtom',
  default: '',
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
