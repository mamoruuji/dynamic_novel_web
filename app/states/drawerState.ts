import { atom } from "recoil"

export const leftDrawerStateAtom = atom<boolean>({
  key: "leftDrawerStateAtom",
  default: false,
})

export const rightDrawerStateAtom = atom<boolean>({
  key: "rightDrawerStateAtom",
  default: false,
})
