'use client'

import * as React from 'react'
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material'

export const GlobalHeader = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <AppBar className='globalAppBar' position='fixed'>
        <Toolbar className='justify-between'>
          {/* <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={() => setLeftOpen(true)}
            edge='start'
            sx={{ mr: 2, ...(leftOpen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant='h6' noWrap component='div' sx={{ m: '0 auto' }}>
            共用ヘッダー
          </Typography>
          {/* <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='end'
            onClick={() => setRightOpen(true)}
            sx={{ ml: 2, ...(rightOpen && { display: 'none' }) }}
          >
            <ContactSupportIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}
