"use client"

import Image from 'next/image'
import React from 'react'
import Box from '@mui/material/Box'
import Header from '../components/reader/header'
import Main from '../components/reader/main'
import DrawerHeader from '../components/reader/drawerHeader'
import RightDrawer from '../components/reader/rightDrawer'
import LeftDrawer from '../components/reader/leftDrawer'
import { Typography } from '@mui/material'
// import Selecter from '../search/selecter'

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  const imageWidth = 100
  const imageHeight = 100

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <RightDrawer />
      <Main sx={{ m: '0 auto' }}>
        <DrawerHeader />
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
              </p>
            </div>
          </li>
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
              </p>
            </div>
          </li>
        </ul>
      </Main>
    </Box>
  )
}
