'use client'

import { Drawer as MuiDrawer } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const Drawer = ({ anchor, children, open }) => {
  const theme = useTheme()
  return (
    <MuiDrawer
      variant='persistent'
      anchor={anchor}
      open={open}
      // width={process.env.NEXT_PUBLIC_DRAWERWIDTH}
      sx={{
        '& .MuiDrawer-paper': {
          pb: theme.spacing(8),
          px: theme.spacing(2),
          top: theme.spacing(8),
          width: process.env.NEXT_PUBLIC_DRAWERWIDTH,
        },
        flexShrink: '0',
      }}
    >
      {children}
    </MuiDrawer>
  )
}
