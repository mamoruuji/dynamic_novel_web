import { atom } from 'recoil'

export const dialogStateAtom = atom<boolean>({
  key: 'dialogStateAtom',
  default: false,
})
