'use client'

import { ContentsChapter } from '../atoms'
import { CircularProgress } from '@mui/material'
import { chaptersAtom } from '@/states/operation-dynamic.ts'
import { useRecoilValue } from 'recoil'

export const Contents = () => {
  const chapters = useRecoilValue(chaptersAtom)

  if (!chapters) return <CircularProgress />

  return chapters.map((chapter, key) => {
    if(chapter.pages !== undefined){
      return (
        <ContentsChapter
          chapter={chapter}
          chapterKey={key}
          key={key}
          id={chapter.chapterId}
        />
      )
    }
  })
}
