'use client'

import { AppBar, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'

import { LoginButton } from '@/components/common/molecules'

import styles from './global-header.module.sass'

export const GlobalHeader = ({ children }) => {
  const [auth, setAuth] = useState(true)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleChange = (event) => setAuth(event.target.checked)
  const handleMenu = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <AppBar className={styles['global-appbar']}>
        <Toolbar className={styles['global-toolbar']}>
          <Typography
            variant='h6'
            noWrap
            component='div'
            className={styles['global-typography']}
          >
            Dynamic Novel
          </Typography>
          <LoginButton />
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}
