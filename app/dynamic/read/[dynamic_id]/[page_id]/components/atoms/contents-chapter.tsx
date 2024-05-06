'use client'
import { useEffect } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  Typography,
} from '@mui/material'

import { ContentsPage } from './'
import { pagesAtom } from '@/states/search-request.ts'
import { useRecoilState } from 'recoil'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const ContentsChapter = ({ chapter, chapterKey, id }) => {
  const [pages, setPages] = useRecoilState(pagesAtom(chapter.chapterId))
  useEffect(() => {
    setPages(chapter.pages)
  }, [])

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-content-${chapterKey}`}
        id={`panel-header-${chapterKey}`}
      >
        <Typography>{chapter.title}</Typography>
      </AccordionSummary>
      {typeof pages !== 'undefined' &&
        pages.map((page, index) => {
          return (
            <AccordionDetails key={index} id={index}>
              <List component='div' disablePadding>
                <ContentsPage page={page} />
              </List>
            </AccordionDetails>
          )
        })}
    </Accordion>
  )
}
