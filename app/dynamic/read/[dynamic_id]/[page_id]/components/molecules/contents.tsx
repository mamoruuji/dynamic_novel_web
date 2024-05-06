'use client'

import { ContentsChapter } from '../atoms'
import { CircularProgress } from '@mui/material'
import { chaptersAtom } from '@/states/search-request.ts'
import { useRecoilValue } from 'recoil'

export const Contents = () => {
  const chapters = useRecoilValue(chaptersAtom)

  if (Object.keys(chapters).length === 0) return <CircularProgress />

  return chapters.map((chapter, key) => {
    return (
      <ContentsChapter chapter={chapter} chapterKey={key} key={key} id={key} />
    )
  })
}
