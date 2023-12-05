'use client'

import { styled } from '@mui/material/styles'
import { Drawer } from '@mui/material'

export const StyledDrawer = styled(Drawer)(() => ({
  width: process.env.drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: process.env.drawerWidth,
    boxSizing: 'border-box',
  },
}))
