'use client'

import { useParams } from 'next/navigation'
import { ContentsChapter } from '@/components/contents/read/atoms'
import { Alert, CircularProgress } from '@mui/material'
import { chaptersAtom } from '@/states/operation-dynamic.ts'
import { useAtom } from 'jotai'

import useSWR from 'swr'

export const Contents = () => {
  const [chapters, setChapters] = useAtom(chaptersAtom)
  const { dynamic_id } = useParams()
  const url = `/api/dynamic/${dynamic_id}`
  const { data, error, isLoading } = useSWR(url, {
    onSuccess: (data) => setChapters(data.chapters),
  })

  if (error) return <Alert severity='warning'>{error}</Alert>
  if (isLoading) return <CircularProgress />

  return chapters.map((chapter, key) => {
    if (chapter.pages !== undefined) {
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
