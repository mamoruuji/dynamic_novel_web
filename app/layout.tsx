'use client'

import '@/styles/globals.sass'
import React from 'react'
import { RecoilRoot } from 'recoil'
import SessionProvider from '../src/provider/SessionProvider'
import { CssBaseline } from '@mui/material'
import Head from './head'
import { GlobalHeader } from '@/components/common/organisms'

import {
  ThemeProvider,
  createTheme,
  getInitColorSchemeScript,
} from '@mui/material/styles'

import { PaletteMode, useMediaQuery } from '@mui/material'

export default function RootLayout({ children }: { children: ReactNode }) {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light'

  const theme = createTheme({
    palette: {
      mode: isDarkMode,
    },
  })

  return (
    <SessionProvider>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <html lang='jp' data-mui-color-scheme={isDarkMode}>
            <Head />
            <body>
              <GlobalHeader>{children}</GlobalHeader>
            </body>
          </html>
        </ThemeProvider>
      </RecoilRoot>
    </SessionProvider>
  )
}
