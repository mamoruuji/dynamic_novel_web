'use client'

import * as React from 'react'
import { CssBaseline, Toolbar, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { AppBar } from './appBar'
import {
  leftDrawerStateAtom,
  rightDrawerStateAtom,
} from 'app/states/drawerState'
import { useRecoilState } from 'recoil'

export const Header = () => {
  const [leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)
  const [rightOpen, setRightOpen] = useRecoilState(rightDrawerStateAtom)

  return (
    <>
      <CssBaseline />
      <AppBar position='fixed' leftOpen={leftOpen} rightOpen={rightOpen}>
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
            作品タイトル
          </Typography>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='end'
            onClick={() => setRightOpen(true)}
            sx={{ ml: 2, ...(rightOpen && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}
