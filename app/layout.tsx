"use client"

import '../src/styles/globals.css'
import { RecoilRoot } from "recoil"
import SessionProvider from "../src/provider/SessionProvider"

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <html lang="jp">
        <head></head>
        <body>
          <RecoilRoot>
            {children}
          </RecoilRoot>
        </body>
      </html>
    </SessionProvider>
  )
}
