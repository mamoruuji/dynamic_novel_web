'use client'

import { useState } from 'react'
import {
  Button,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import EditIcon from '@mui/icons-material/Edit'

import { AppBar } from '@/components/common/atoms'
import {
  leftDrawerStateAtom,
  rightDrawerStateAtom,
} from '@/states/drawer-state.ts'
import { useRecoilState } from 'recoil'
import styles from './local-header.module.sass'
import { useTheme } from '@mui/material/styles'

export const LocalHeader = ({ name, leftDrawer, RightDrawer, isCreate }) => {
  const [leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)
  const [rightOpen, setRightOpen] = useRecoilState(rightDrawerStateAtom)
  const [dynamic, updateDynamic] = useState('')
  const theme = useTheme()

  return (
    <AppBar className={styles['local-appbar']} >
      <Toolbar className={styles['local-toolbar']}>
        <Button
          aria-label='open drawer'
          onClick={() => setLeftOpen(true)}
          edge='start'
          sx={{ mr: theme.spacing(1), ...(leftOpen && { display: 'none' }) }}
          variant='contained'
        >
          <MenuIcon sx={{ mr: theme.spacing(1) }} />
          {leftDrawer}
        </Button>
        <Typography variant='h6' noWrap component='div' className={styles['local-typography']}>
          {name}
        </Typography>
        {isCreate &&
          <Button
            aria-label='edit'
            color='warning'
            edge='end'
            onClick={() => updateDynamic()}
            sx={{ ml: theme.spacing(1) }}
            variant='contained'
          >
            <EditIcon sx={{ mr: theme.spacing(1) }} />
            更新
          </Button>
        }
        <Button
          aria-label='open drawer'
          edge='end'
          onClick={() => setRightOpen(true)}
          sx={{ ml: theme.spacing(1), ...(rightOpen && { display: 'none' }) }}
            variant='contained'
        >
          <ContactSupportIcon sx={{ mr: theme.spacing(1) }} />
          {RightDrawer}
        </Button>
      </Toolbar>
    </AppBar>
  )
}
