'use client'

import { Toolbar, Typography, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

import { AppBar } from '@/common/atoms'
import {
  leftDrawerStateAtom,
  rightDrawerStateAtom,
} from '@/states/drawer-state.ts'
import { useRecoilState } from 'recoil'
import styles from './local-header.module.sass'

export const LocalHeader = ({ name }) => {
  const [leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)
  const [rightOpen, setRightOpen] = useRecoilState(rightDrawerStateAtom)

  return (
    <AppBar className={styles['local-appbar']} >
      <Toolbar className={styles['local-toolbar']}>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={() => setLeftOpen(true)}
          edge='start'
          sx={{ mr: 2, ...(leftOpen && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div' className={styles['local-typography']}>
          {name}
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
  )
}
