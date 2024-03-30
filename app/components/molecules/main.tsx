'use client'

import { styled, Theme } from '@mui/material/styles'
import { DrawerHeader, leaveTransition, enterTransition } from '@/common/atoms'
import {
  leftDrawerStateAtom,
  rightDrawerStateAtom,
} from '@/states/drawer-state.ts'
import { useRecoilState } from 'recoil'

export const Main = styled('main')(({ theme }) => {
  const [leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)
  const [rightOpen, setRightOpen] = useRecoilState(rightDrawerStateAtom)

  return {
    flexGrow: 1,
    padding: theme.spacing(3),
    position: 'relative',
    ...leaveTransition(theme, 'margin'),
    // marginLeft: `-${process.env.NEXT_PUBLIC_DRAWERWIDTH}`,
    ...(leftOpen && {
      // marginLeft: 0,
      ...enterTransition(theme, 'margin'),
    }),
    // marginRight: `-${process.env.NEXT_PUBLIC_DRAWERWIDTH}`,
    ...(rightOpen && {
      // marginRight: 0,
      ...enterTransition(theme, 'margin'),
    }),
  }
})
