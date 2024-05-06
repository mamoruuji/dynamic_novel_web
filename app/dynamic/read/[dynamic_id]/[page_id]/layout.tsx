'use client'

import { Container } from '@mui/material'
import { DrawerHeader } from '@/common/atoms'
import { Main } from '@/common/molecules'
import { LocalHeader } from '@/common/organisms'
import { LeftDrawer, RightDrawer, SearchResults } from './components/organisms/'

export default function RootLayout({ children }: { children: ReactNode }) {
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
      <LeftDrawer />
      <LocalHeader />
      <Main>
        <DrawerHeader />
        <DrawerHeader />
        {children}

        <Container className='summary'>
          <SearchResults results={searchResults} />
        </Container>
      </Main>
      <RightDrawer />
    </>
  )
}
