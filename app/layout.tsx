'use client'

import '@/styles/globals.sass'
import React from 'react'
import { Provider } from 'jotai'
import SessionProvider from '../src/provider/SessionProvider'
import { CssBaseline } from '@mui/material'
import Head from './head'
import { GlobalHeader } from '@/components/common/organisms'
import { SWRConfig } from 'swr'

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
    components: {
      MuiList: {
        styleOverrides: {
          root: {
            padding: '8px',
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            padding: '8px',
          },
        },
      },
    },
  })

  return (
    <SessionProvider>
      <Provider>
        <ThemeProvider theme={theme}>
          <SWRConfig
            value={{
              fetcher: (url) => fetch(url).then((res) => res.json()),
              revalidateIfStale: false,
              revalidateOnFocus: false,
              revalidateOnReconnect: false,
            }}
          >
            <CssBaseline />
            <html lang='jp' data-mui-color-scheme={isDarkMode}>
              <Head />
              <body>
                <GlobalHeader>{children}</GlobalHeader>
              </body>
            </html>
          </SWRConfig>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  )
}
