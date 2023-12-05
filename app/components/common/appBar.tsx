'use client'

import { styled, Theme } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import { leaveTransition, enterTransition } from '@common'
import {
  leftDrawerStateAtom,
  rightDrawerStateAtom,
} from 'app/states/drawerState'
import { useRecoilState } from 'recoil'

const getTransitionStyles = (
  theme: Theme,
  position: 'marginLeft' | 'marginRight',
) => ({
  width: `calc(100% - ${process.env.drawerWidth}px)`,
  [position]: `${process.env.drawerWidth}px`,
  ...enterTransition(theme, ['margin', 'width']),
})

export const AppBar = styled(MuiAppBar)(({ theme }) => {
  const [leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)
  const [rightOpen, setRightOpen] = useRecoilState(rightDrawerStateAtom)

  return {
    ...leaveTransition(theme, ['margin', 'width']),
    ...(leftOpen && getTransitionStyles(theme, 'marginLeft')),
    ...(rightOpen && getTransitionStyles(theme, 'marginRight')),
  }
})
