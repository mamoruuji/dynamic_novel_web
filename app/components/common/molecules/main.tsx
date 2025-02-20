'use client'

import { styled } from '@mui/material/styles'
import { useAtom } from 'jotai'

import { enterTransition,leaveTransition } from '@/components/common/atoms'
import {
  leftDrawerStateAtom,
  rightDrawerStateAtom,
} from '@/states/drawer-state.ts'

export const Main = styled('main')(({ theme }) => {
  const [leftOpen, setLeftOpen] = useAtom(leftDrawerStateAtom)
  const [rightOpen, setRightOpen] = useAtom(rightDrawerStateAtom)

  return {
    flexGrow: 1,
    ...leaveTransition(theme, 'margin'),
    marginLeft: `${process.env.NEXT_PUBLIC_DRAWERWIDTH}`,
    ...(leftOpen && {
      ...enterTransition(theme, 'margin'),
    }),
    marginRight: `${process.env.NEXT_PUBLIC_DRAWERWIDTH}`,
    ...(rightOpen && {
      ...enterTransition(theme, 'margin'),
    }),
    paddingTop: theme.spacing(18),
    position: 'relative',
  }
})
