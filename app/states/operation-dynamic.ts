import { atomFamily } from 'jotai/utils'
import { atom } from 'jotai'

export const chaptersAtom = atom([])

export const sectionsAtom = atom([])

export const pagesAtomFamily = atomFamily((chapterId) => atom([]))

export const termsAtomFamily = atomFamily((key) => atom([]))

export const editTextAtom = atomFamily((id) => atom(false))
