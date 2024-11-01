'use client'

import { Drawer as MuiDrawer } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const Drawer = ({ anchor, open, children }) => {
  const theme = useTheme()
  return (
    <MuiDrawer
      variant='persistent'
      anchor={anchor}
      open={open}
      // width={process.env.NEXT_PUBLIC_DRAWERWIDTH}
      sx={{
        flexShrink: '0',
        '& .MuiDrawer-paper': {
          top: theme.spacing(8),
          width: process.env.NEXT_PUBLIC_DRAWERWIDTH,
          px: theme.spacing(2),
          mb: theme.spacing(8),
        },
      }}
    >
      {children}
    </MuiDrawer>
  )
}
