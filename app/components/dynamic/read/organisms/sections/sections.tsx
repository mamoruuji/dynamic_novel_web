'use client'

import { useParams } from 'next/navigation'

import { Alert, Box, CircularProgress } from '@mui/material'

import {
  IconSpace,
  Monologue,
  LineBubble,
  ThoughtBubble,
  ShoutBubble,
  Illustration,
} from '@/components/dynamic/read/molecules'
import styles from './sections.module.sass'

import useSWR from 'swr'
import { isEmptyObject } from 'src/libs/util'

export const Sections = () => {
  const { dynamic_id, chapter_id, page_id } = useParams()
  const url = `/api/dynamic/${dynamic_id}`
  const { data, error, isLoading } = useSWR(url)

  if (error) return <Alert severity='warning'>{error}</Alert>
  if (isLoading) return <CircularProgress />
  if (isEmptyObject(data)) return <Typography>No data</Typography>

  const sections = data.chapters
    .find((chapter) => chapter.chapterId == chapter_id)
    .pages.find((page) => page.pageId == page_id).sections
  return (
    <>
      {sections.map((section, key) => {
        let content
        switch (section.typeSection) {
          case 'monologue':
            content = <Monologue section={section} />
            break
          case 'image':
            content = <Illustration section={section} />
            break
          case 'line-bubble':
            content = <LineBubble section={section} />
            break
          case 'shout-bubble':
            content = <ShoutBubble section={section} />
            break
          case 'thought-bubble':
            content = <ThoughtBubble section={section} />
            break
        }

        return (
          <Box className={styles.section} key={key}>
            <IconSpace section={section} position={'left'} />
            {content}
            <IconSpace section={section} position={'right'} />
          </Box>
        )
      })}
    </>
  )
}
