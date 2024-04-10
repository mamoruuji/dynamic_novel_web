'use client'

import { AppBar, Toolbar, Typography } from '@mui/material'

export const GlobalHeader = ({ children }) => {
  return (
    <>
      <AppBar className='globalAppBar' position='fixed'>
        <Toolbar className='justify-between'>
          <Typography variant='h6' noWrap component='div' sx={{ m: '0 auto' }}>
            共用ヘッダー
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}
