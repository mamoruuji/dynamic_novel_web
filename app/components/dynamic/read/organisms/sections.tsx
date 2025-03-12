'use client'

import { Alert, CircularProgress, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { isEmptyObject } from 'src/libs/util'
import useSWR from 'swr'

import { Section } from '@/components/dynamic/common/molecules'
import { sectionsAtom } from '@/states/operation-dynamic.ts'

export const Sections = () => {
  const [sections, setSections] = useAtom(sectionsAtom)

  const { chapter_id, dynamic_id, page_id } = useParams()
  const url = `/api/dynamic/${dynamic_id}?dummySection`
  const { data, error, isLoading } = useSWR(url, {
    onSuccess: (data) => {
      const chapter = data.chapters?.find(
        (chapter) => chapter.chapterId == chapter_id,
      )
      const page = chapter?.pages?.find((page) => page.pageId == page_id)
      const sections = page?.sections || []

      setSections(sections)
    },
  })

  if (error) return <Alert severity='warning'>{error}</Alert>
  if (isLoading) return <CircularProgress />
  if (isEmptyObject(data)) return <Typography>No data</Typography>

  return (
    <>
      {sections.map((section, key) => {
        return <Section section={section} key={key} />
      })}
    </>
  )
}
