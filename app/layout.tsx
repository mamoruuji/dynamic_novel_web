'use client'

import '@styles/globals.sass'
import { RecoilRoot } from 'recoil'
import SessionProvider from '../src/provider/SessionProvider'
import Head from './head'
import { GlobalHeader } from '@common'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SessionProvider>
      <html lang='jp'>
        <Head />
        <body>
          <RecoilRoot>
            <GlobalHeader>{children}</GlobalHeader>
          </RecoilRoot>
        </body>
      </html>
    </SessionProvider>
  )
}
