'use client'

import '@/styles/globals.sass'
import React from 'react'
import { RecoilRoot } from 'recoil'
import SessionProvider from '../src/provider/SessionProvider'
import { CssBaseline, Paper } from '@mui/material'
import { ThemeContainer } from '../src/themeContainer.tsx'
import Head from './head'
import { GlobalHeader } from '@/common/organisms'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SessionProvider>
        <RecoilRoot>
          <ThemeContainer>
            <CssBaseline />
            <html lang='jp'>
              <Head />
              <body>
                <Paper>
                  <GlobalHeader>{children}</GlobalHeader>
                </Paper>
              </body>
            </html>
          </ThemeContainer>
        </RecoilRoot>
      </SessionProvider>
    </>
  )
}
