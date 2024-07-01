'use client'

import { AppBar, Toolbar, Typography } from '@mui/material'
import styles from './global-header.module.sass'

export const GlobalHeader = ({ children }) => {
  return (
    <>
      <AppBar className={styles['global-appbar']}>
        <Toolbar className={styles['global-toolbar']}>
          <Typography variant='h6' noWrap component='div' className={styles['global-typography']}>
            Dynamic Novel
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
}
