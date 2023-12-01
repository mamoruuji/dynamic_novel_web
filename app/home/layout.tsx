'use client'

import Image from 'next/image'
import React from 'react'
import { Box, Typography, Container, List, ListItem } from '@mui/material'
import {
  LocalHeader,
  Main,
  DrawerHeader,
  RightDrawer,
  LeftDrawer,
  Selecter,
  Sort,
  LoginButton,
  CoverImage,
} from '@common'

const dynamics = [
  'タイトル',
  '作者名',
  'タグ',
  'お気に入り数',
  '初回公開日',
  '更新日',
  'ページ数',
  '星評価平均',
  '感想数',
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const imageUrl = '/images/cover.jpg'
  const dynamicName = '★作品名★'
  const dynamicDetail =
    '★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★'

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <LocalHeader />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <LeftDrawer />
        <Main className='justify-between'>
          <DrawerHeader />
          <DrawerHeader />
          <Selecter />
          <Sort />
          <LoginButton />
          {children}

          <Container className='summary' margin='250'>
            <List>
              <ListItem>
                <CoverImage src={imageUrl} />
                <Box>
                  <Typography variant='h6'>{dynamicName}</Typography>
                  <Typography>{dynamicDetail}</Typography>
                </Box>
              </ListItem>
            </List>
          </Container>
        </Main>
        <RightDrawer />
      </Box>
    </>
  )
}
