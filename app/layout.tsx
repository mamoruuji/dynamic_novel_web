'use client'

import '@/styles/globals.sass'
import React from 'react'
import { RecoilRoot } from 'recoil'
import SessionProvider from '../src/provider/SessionProvider'
import { CssBaseline } from '@mui/material'
import Head from './head'
import { GlobalHeader } from '@/common/organisms'

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  getInitColorSchemeScript,
} from '@mui/material/styles'

import { PaletteMode, useMediaQuery } from '@mui/material'

export default function RootLayout({ children }: { children: ReactNode }) {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light'

  const theme = extendTheme({
    palette: {
      mode: isDarkMode,
    },
  })

  return (
    <>
      <SessionProvider>
        <RecoilRoot>
          <CssVarsProvider theme={theme}>
            <CssBaseline />
            <html lang='jp' data-mui-color-scheme={isDarkMode}>
              <Head />
              <body>
                <GlobalHeader>{children}</GlobalHeader>
              </body>
            </html>
          </CssVarsProvider>
        </RecoilRoot>
      </SessionProvider>
    </>
  )
}
