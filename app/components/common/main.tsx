'use client'

import { styled } from '@mui/material/styles'
import { leaveTransition, enterTransition } from '@common'

export const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  ...leaveTransition(theme, 'margin'),
  marginLeft: `${process.env.drawerWidth}px`,
  ...(open && {
    ...enterTransition(theme, 'margin'),
    marginLeft: 0,
  }),
  marginRight: `-${process.env.drawerWidth}px`,
  ...(open && {
    ...enterTransition(theme, 'margin'),
    marginRight: 0,
  }),
}))
