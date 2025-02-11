'use client'

import { Container } from '@mui/material'
import { Main } from '@/components/common/molecules'
import {
  LocalHeader,
  LeftDrawer,
  RightDrawer,
} from '@/components/common/organisms'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LeftDrawer />
      <LocalHeader
        name='読書画面'
        leftDrawer='目次'
        RightDrawer='用語'
        isCreate={false}
      />
      <Main>
        <Container className='summary'>{children}</Container>
      </Main>
      <RightDrawer />
    </>
  )
}
