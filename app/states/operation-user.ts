import { atom, atomFamily, selector } from 'recoil'
import { GetUserType, GetImageType } from '@/type/'

export const userAtom = atom<GetUserType>({
  key: 'userAtom',
  default: {},
})

// export const imagesAtom = atomFamily<GetImageType[] | null, number>({
//   key: 'imagesAtom',
//   default: [],
// })

export const imageAtom = atom<GetImageType>({
  key: 'imageAtom',
  default: {},
})
