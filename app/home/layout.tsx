'use client'

import { Container } from '@mui/material'
import {
  LocalHeader,
} from '@/common/organisms'
import { Main } from '@/common/molecules'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LocalHeader name='ホーム' />
      <Main>
        {children}
      </Main>
    </>
  )
}
