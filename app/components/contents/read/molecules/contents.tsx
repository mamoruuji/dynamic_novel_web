'use client'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  Box,
  Button,
  CircularProgress,
  List,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { chaptersAtom } from '@/states/operation-dynamic.ts'
import { useAtom } from 'jotai'
import useSWR from 'swr'
import {
  ContentsChapter,
  ContentsPage,
} from '@/components/contents/read/molecules'

import { useParams } from 'next/navigation'

export const Contents = () => {
  const [chapters, setChapters] = useAtom(chaptersAtom)

  const { dynamic_id } = useParams()
  const url = `/api/dynamic/${dynamic_id}`
  const { data, error, isLoading } = useSWR(url, {
    onSuccess: (data) => setChapters(data.chapters),
  })

  if (error) return <Alert severity='warning'>{error}</Alert>
  if (isLoading) return <CircularProgress />

  return chapters.map((chapter) => (
    <Accordion key={chapter.chapterId}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <ContentsChapter
          id={`chapter:${chapter.chapterId}`}
          chapterId={chapter.chapterId}
          name={chapter.title}
        />
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {typeof chapter.pages !== 'undefined' &&
            chapter.pages.map((page) => (
              <ContentsPage
                key={page.pageId}
                id={`page:${page.pageId}`}
                chapterId={chapter.chapterId}
                pageId={page.pageId}
                name={page.title}
              />
            ))}
        </List>
      </AccordionDetails>
    </Accordion>
  ))
}
