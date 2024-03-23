'use client'

import Image from 'next/image'
import React from 'react'
import { Box, Typography, Container, List, ListItem } from '@mui/material'
import { LocalHeader, LeftDrawer } from './components'
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
    </>
  )
}
