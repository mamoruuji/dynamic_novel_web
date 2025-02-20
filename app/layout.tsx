'use client'

import '@/styles/globals.sass'

import { CssBaseline, useMediaQuery } from '@mui/material'
import { createTheme,ThemeProvider } from '@mui/material/styles'
import { Provider } from 'jotai'
import React from 'react'
import { SWRConfig } from 'swr'

import { GlobalHeader } from '@/components/common/organisms'

import SessionProvider from '../src/provider/SessionProvider'
import Head from './head'

export default function RootLayout({ children }: { children: ReactNode }) {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light'

  const theme = createTheme({
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
    palette: {
      mode: isDarkMode,
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
