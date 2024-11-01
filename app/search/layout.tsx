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
      <LocalHeader name='検索' leftDrawer='検索機能' RightDrawer='おすすめ' isCreate={false} />
      <Main>
        <Container className='summary'>{children}</Container>
      </Main>
      <RightDrawer />
    </>
  )
}
