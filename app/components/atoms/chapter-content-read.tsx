'use client'
import {
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
} from '@mui/material'

import { PageContentRead } from '@/common/atoms'

import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CloseIcon from '@mui/icons-material/Close'

import { dynamicAtom } from '@/states/search-request.ts'
import { useRecoilState } from 'recoil'

export const ChapterContentRead = ({ chapter, chapterKey }) => {
  const [dynamic, setDynamic] = useRecoilState(dynamicAtom)
  console.log(chapterKey)
  console.log(chapter)

  return (
    <Accordion key={chapterKey}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-content-${chapterKey}`}
        id={`panel-header-${chapterKey}`}
      >
        <Typography>{chapter.title}</Typography>
      </AccordionSummary>
      {typeof chapter.pages !== 'undefined' &&
        chapter.pages.map((page, index) => {
          return (
            <AccordionDetails key={index}>
              <List component='div' disablePadding>
                <PageContentRead page={page} />
              </List>
            </AccordionDetails>
          )
        })}
    </Accordion>
  )
}
