import { atomFamily } from 'jotai/utils'
import { atom } from 'jotai'

export const chaptersAtom = atom([])

export const pagesAtom = atomFamily((key) => {
  return atom([])
})

export const termsAtom = atomFamily((key) => {
  return atom([])
})
