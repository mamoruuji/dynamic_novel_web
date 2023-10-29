'use client'

import Image from 'next/image'
import React from 'react'
import Box from '@mui/material/Box'
import Header from '../components/search/header'
import Main from '../components/search/main'
import DrawerHeader from '../components/search/drawerHeader'
import RightDrawer from '../components/search/rightDrawer'
import LeftDrawer from '../components/search/leftDrawer'
import Selecter from '../components/search/selecter'
import Sort from '../components/search/sort'
import LoginButton from '../components/common/loginButton'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const imageWidth = 100
  const imageHeight = 100

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
            <div className='cover'>
              <Image src='/images/cover.jpg' width={imageWidth} height={imageHeight} alt='test' />
            </div>
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
