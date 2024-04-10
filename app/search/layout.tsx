'use client'

import { Container } from '@mui/material'
import { DrawerHeader } from '@/common/atoms'
import { Main } from '@/common/molecules'
import { LocalHeader } from '@/common/organisms/'
import { LeftDrawer, RightDrawer } from './components/organisms/'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LeftDrawer />
      <LocalHeader />
      <Main>
        <DrawerHeader />
        <DrawerHeader />

        <Container className='summary'>{children}</Container>
      </Main>
      <RightDrawer />
    </>
  )
}
