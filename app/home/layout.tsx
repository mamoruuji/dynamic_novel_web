'use client'

import Image from 'next/image'
import React from 'react'
import { Box } from '@mui/material'
import {
  Header,
  Main,
  DrawerHeader,
  RightDrawer,
  LeftDrawer,
  Selecter,
  Sort,
  LoginButton,
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
  const imageWidth = '100'
  const imageHeight = '100'

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <RightDrawer />
      <Main sx={{ m: '0 auto' }}>
        <DrawerHeader />
        <Selecter />
        <Sort />
        <LoginButton />

        <ul className='list'>
          <li>
            <figure
              className='cover'
              style={{
                position: 'relative',
                width: imageWidth,
                height: imageHeight,
              }}
            >
              <Image
                src='/images/cover.jpg'
                alt='test'
                fill
                sizes='100%'
                style={{
                  objectFit: 'cover',
                }}
              />
            </figure>
            <div className='summary'>
              <p>★作品名★</p>
              <p>
                ★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★
                ★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★
                ★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★
                ★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★
                ★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★
                ★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★
                ★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★
                ★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★★説明文章★
              </p>
            </div>
          </li>
        </ul>
      </Main>
      <LeftDrawer />
    </Box>
  )
}
