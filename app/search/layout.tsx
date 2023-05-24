"use client"

import Image from 'next/image'
import React from 'react'
import Box from '@mui/material/Box'
import Header from '../components/search/header'
import Main from '../components/search/main'
import DrawerHeader from '../components/search/drawerHeader'
import RightDrawer from '../components/search/rightDrawer'
import LeftDrawer from '../components/search/leftDrawer'
import Selecter from '../components/search/selecter'
import { Typography } from '@mui/material'
// import Selecter from '../search/selecter'

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  const imageWidth = 100
  const imageHeight = 100

  const sortCategoryTargetItems = [
    "作品名",
    "紹介文章",
    "表紙画像URL",
    "作者名",
    "タグ",
    "初回公開日",
    "更新日",
    "お気に入り数",
    "星評価平均",
    "感想数",
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <RightDrawer />
      <Main sx={{ m: '0 auto' }}>
        <DrawerHeader />
        <Selecter />
        <ul className="list">
          <li>
            <div className="cover">
              <Image src="/cover.jpg" width={imageWidth} height={imageHeight} alt="test" />
            </div>
            <div className="summary">
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
