"use client"

import '../src/styles/globals.css'
import { RecoilRoot } from "recoil"

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="jp">
      <head></head>
      <body>
        <RecoilRoot>
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}
