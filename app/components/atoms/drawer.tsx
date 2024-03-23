'use client'

import { Drawer as MuiDrawer } from '@mui/material'

export const Drawer = ({ anchor, open, children }) => {
  return (
    <MuiDrawer
      variant='persistent'
      anchor={anchor}
      open={open}
      width={process.env.NEXT_PUBLIC_DRAWERWIDTH}
      sx={{
        flexShrink: '0',
        '& .MuiDrawer-paper': {
          top: '64px',
          width: process.env.NEXT_PUBLIC_DRAWERWIDTH,
          px: '16px',
        },
      }}
    >
      {children}
    </MuiDrawer>
  )
}
