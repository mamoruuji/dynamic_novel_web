'use client'

import { Container } from '@mui/material'
import { Main } from '@/components/common/molecules'
import { LocalHeader } from '@/components/common/organisms'
import { LeftDrawer, RightDrawer } from '@/components/create/dynamic/organisms'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LeftDrawer />
      <LocalHeader name='作成画面' leftDrawer='目次' RightDrawer='用語' isCreate={true} />
      <Main>
        <Container className='summary'>{children}</Container>
      </Main>
      <RightDrawer />
    </>
  )
}
