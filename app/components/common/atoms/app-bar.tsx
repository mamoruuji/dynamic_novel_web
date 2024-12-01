'use client'

import { styled, Theme } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import { leaveTransition, enterTransition } from '@/components/common/atoms'
import {
  leftDrawerStateAtom,
  rightDrawerStateAtom,
} from '@/states/drawer-state.ts'
import { useAtom } from 'jotai'

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
