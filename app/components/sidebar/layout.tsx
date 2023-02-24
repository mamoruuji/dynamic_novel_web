"use client"

import Image from 'next/image'
import React from 'react'
import Box from '@mui/material/Box'
import Header from '../reader/header'
import Main from './main'
import DrawerHeader from './drawerHeader'
import RightDrawer from './rightDrawer'
import LeftDrawer from './leftDrawer'
// import Selecter from '../search/selecter'

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  const imageWidth = 100;
  const imageHeight = 100;

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <RightDrawer />
      <Main sx={{ margin: '0 auto' }}>
        <DrawerHeader />
        <div className="section">
        <div className="left-side">
            <div className="icon">
              <Image src="/test3.png" width={imageWidth} height={imageHeight} alt="test" />
                <p>★アイコン名★</p>
            </div>
            <div className="bubble">
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
            </div>
        </div>
        </div>
        <div className="section">
        <div className="right-side">
            <div className="icon">
              <Image src="/test3.png" width={imageWidth} height={imageHeight} alt="test" />
                <p>★アイコン名★</p>
            </div>
            <div className="bubble">
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
            </div>
        </div>
        </div>
        <div className="section">
        <div className="left-side">
            <div className="icon">
              <Image src="/test3.png" width={imageWidth} height={imageHeight} alt="test" />
                <p>★アイコン名★</p>
            </div>
            <div className="think-bubble">
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
            </div>
        </div>
        </div>
        <div className="section">
        <div className="right-side">
            <div className="icon">
              <Image src="/test3.png" width={imageWidth} height={imageHeight} alt="test" />
                <p>★アイコン名★</p>
            </div>
            <div className="think-bubble">
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
            </div>
        </div>
        </div>
        <div className="section">
        <div className="left-side">
            <div className="icon">
              <Image src="/test3.png" width={imageWidth} height={imageHeight} alt="test" />
                <p>★アイコン名★</p>
            </div>
          <div className="zigzag-bubble">
            <div className="zigzag-top"></div>
            <div className="zigzag-box">
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
            </div>
            <div className="zigzag-bottom"></div>
          </div>
        </div>
        </div>
        <div className="section">
        <div className="right-side">
            <div className="icon">
              <Image src="/test3.png" width={imageWidth} height={imageHeight} alt="test" />
                <p>★アイコン名★</p>
            </div>
          <div className="zigzag-bubble">
            <div className="zigzag-top"></div>
            <div className="zigzag-box">
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
                ★吹き出し内の文章★
            </div>
            <div className="zigzag-bottom"></div>
          </div>
        </div>
        </div>
      </Main>
      {/* <Selecter /> */}
      <LeftDrawer />
    </Box>
  )
}
