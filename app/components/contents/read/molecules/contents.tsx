'use client'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  CircularProgress,
  List,
} from '@mui/material'
import { useAtom } from 'jotai'
import { useParams } from 'next/navigation'
import useSWR from 'swr'

import { ContentsItem } from '@/components/contents/read/atoms'
import { chaptersAtom } from '@/states/operation-dynamic.ts'

export const Contents = () => {
  const [chapters, setChapters] = useAtom(chaptersAtom)

  const { dynamic_id } = useParams()
  const url = `/api/dynamic/${dynamic_id}?dummyContents`
  const { data, error, isLoading } = useSWR(url, {
    onSuccess: (data) => setChapters(data.chapters),
  })

  if (error) return <Alert severity='warning'>{error}</Alert>
  if (isLoading) return <CircularProgress />

  return chapters
    .filter((chapter) => chapter.pages && chapter.pages.length > 0)
    .map((chapter) => (
      <Accordion key={chapter.chapterId}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ContentsItem
            id={`chapter:${chapter.chapterId}`}
            name={chapter.name}
          />
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {typeof chapter.pages !== 'undefined' &&
              chapter.pages.map((page) => (
                <ContentsItem
                  key={page.pageId}
                  id={`page:${page.pageId}`}
                  name={page.name}
                  href={`/dynamic/${dynamic_id}/${chapter.chapterId}/${page.pageId}`}
                />
              ))}
          </List>
        </AccordionDetails>
      </Accordion>
    ))
}
