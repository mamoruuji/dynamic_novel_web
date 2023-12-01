'use client'

import { styled } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { leaveTransition, enterTransition } from '@common'

interface AppBarProps extends MuiAppBarProps {
  leftOpen?: boolean
  rightOpen?: boolean
}

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'leftOpen' && prop !== 'rightOpen',
})<AppBarProps>(({ theme, leftOpen, rightOpen }) => ({
  ...leaveTransition(theme, ['margin', 'width']),
  ...(leftOpen && {
    width: `calc(100% - ${process.env.drawerWidth}px)`,
    marginLeft: `${process.env.drawerWidth}px`,
    ...enterTransition(theme, ['margin', 'width']),
  }),
  ...(rightOpen && {
    width: `calc(100% - ${process.env.drawerWidth}px)`,
    marginRight: `${process.env.drawerWidth}px`,
    ...enterTransition(theme, ['margin', 'width']),
  }),
}))
