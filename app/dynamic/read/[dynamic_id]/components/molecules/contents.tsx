'use client'

import { ContentsChapter } from '../atoms'
import { CircularProgress } from '@mui/material'
import { dynamicAtom } from '@/states/search-request.ts'
import { useRecoilValue } from 'recoil'

export const Contents = () => {
  const dynamic = useRecoilValue(dynamicAtom)

  if (!dynamic.chapters) return <CircularProgress />

  return dynamic.chapters.map((chapter, key) => {
    return (
      <ContentsChapter
        chapter={chapter}
        chapterKey={key}
        key={key}
        id={chapter.chapterId}
      />
    )
  })
}
