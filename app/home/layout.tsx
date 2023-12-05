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
  SearchResults,
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
  const searchResults = [
    {
      id: 1,
      title: '記事1',
      description:
        '記事1の★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★',
      imageUrl: '/images/cover.jpg',
    },
    {
      id: 2,
      title: '記事2',
      description: '記事2の説明文',
      imageUrl: '/images/cover.jpg',
    },
  ]

  return (
    <>
      <LeftDrawer lassName='top-16' />
      <Box sx={{ display: 'flex' }}>
        <LocalHeader />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <Main className='justify-between'>
          <DrawerHeader />
          <DrawerHeader />
          <Selecter />
          <Sort />
          <LoginButton />
          {children}

          <Container className='summary'>
            <SearchResults results={searchResults} />
          </Container>
        </Main>
      </Box>
      <RightDrawer className='top-16' />
    </>
  )
}
