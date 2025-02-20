'use client'

import { Container } from '@mui/material'

import { Main } from '@/components/common/molecules'
import {
  LeftDrawer,
  LocalHeader,
  RightDrawer,
} from '@/components/common/organisms'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LeftDrawer />
      <LocalHeader
        name='ユーザ'
        leftDrawer='リンク'
        rightDrawer='おすすめ'
        isCreate={false}
      />
      <Main>
        <Container className='summary'>{children}</Container>
      </Main>
      <RightDrawer />
    </>
  )
}
