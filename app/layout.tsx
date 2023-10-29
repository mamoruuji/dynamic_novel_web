'use client'

import '../src/styles/globals.css'
import { RecoilRoot } from 'recoil'
import SessionProvider from '../src/provider/SessionProvider'
import Head from './head'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <html lang='jp'>
        <Head />
        <body>
          <RecoilRoot>{children}</RecoilRoot>
        </body>
      </html>
    </SessionProvider>
  )
}
