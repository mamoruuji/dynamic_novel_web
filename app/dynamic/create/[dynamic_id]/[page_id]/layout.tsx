'use client'

import { Container } from '@mui/material'
import { LocalHeader, RightDrawer, SearchResults } from '@/common/organisms'
import { LeftDrawer } from './components/organismes/'
import { DrawerHeader } from '@/common/atoms'
import { Main } from '@/common/molecules'

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
