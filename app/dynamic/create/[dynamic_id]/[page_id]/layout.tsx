'use client'

import Image from 'next/image'
import React from 'react'
import { Container } from '@mui/material'
import {
  LocalHeader,
  RightDrawer,
  LeftDrawer,
  SearchResults,
} from '@/common/organisms'
import { Main } from '@/common/molecules'
import { DrawerHeader } from '@/common/atoms'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
