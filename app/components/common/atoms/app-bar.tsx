'use client'

import MuiAppBar from '@mui/material/AppBar'
import { styled, Theme } from '@mui/material/styles'
import { useAtom } from 'jotai'

import { enterTransition,leaveTransition } from '@/components/common/atoms'
import {
  leftDrawerStateAtom,
  rightDrawerStateAtom,
} from '@/states/drawer-state.ts'

const getTransitionStyles = (
  theme: Theme,
  position: 'marginLeft' | 'marginRight',
) => ({
  width: `calc(100% - ${process.env.NEXT_PUBLIC_DRAWERWIDTH})`,
  [position]: process.env.NEXT_PUBLIC_DRAWERWIDTH,
  ...enterTransition(theme, ['margin', 'width']),
})

export const AppBar = styled(MuiAppBar)(({ theme }) => {
  const [leftOpen, setLeftOpen] = useAtom(leftDrawerStateAtom)
  const [rightOpen, setRightOpen] = useAtom(rightDrawerStateAtom)

  return {
    ...leaveTransition(theme, ['margin', 'width']),
    ...(leftOpen && getTransitionStyles(theme, 'marginLeft')),
    ...(rightOpen && getTransitionStyles(theme, 'marginRight')),
  }
})
