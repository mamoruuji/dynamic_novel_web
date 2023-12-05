'use client'

import * as React from 'react'
import { CssBaseline, Toolbar, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

import { AppBar } from './appBar'
import {
  leftDrawerStateAtom,
  rightDrawerStateAtom,
} from 'app/states/drawerState'
import { useRecoilState } from 'recoil'

export const LocalHeader = () => {
  const [leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)
  const [rightOpen, setRightOpen] = useRecoilState(rightDrawerStateAtom)

  return (
    <>
      <CssBaseline />
      <AppBar className='localAppBar' position='fixed'>
        <Toolbar className='justify-between'>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={() => setLeftOpen(true)}
            edge='start'
            sx={{ mr: 2, ...(leftOpen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div' sx={{ m: '0 auto' }}>
            個別ヘッダー
          </Typography>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='end'
            onClick={() => setRightOpen(true)}
            sx={{ ml: 2, ...(rightOpen && { display: 'none' }) }}
          >
            <ContactSupportIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}
