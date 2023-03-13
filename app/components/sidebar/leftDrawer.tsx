"use client"

import * as React from 'react'
import useTheme from '@mui/material/styles/useTheme'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import DrawerHeader from '../sidebar/drawerHeader'
import { leftDrawerStateAtom } from "app/states/drawerState"
import { useRecoilState } from "recoil"

import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// 任意の文字列キーを許容したオブジェクト
type chapterPegesType = { [chapter: string]: string[] }

const LeftDrawer = () => {
  const chapterPeges: chapterPegesType = {
    "章1": [
      "ページ1-1",
      "ページ1-2",
      "ページ1-3",
    ],
    "章2": [],
    "章3": [
      "ページ1-3",
    ],
  }

  const theme = useTheme()
  const [ leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)

  return (
    <Drawer
      sx={{
        width: process.env.drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: process.env.drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={leftOpen}
    >
    <DrawerHeader className="justify-end">
      <IconButton onClick={ () => setLeftOpen(false) }>
        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </DrawerHeader>
    <Divider />
    <div>
      {Object.keys(chapterPeges).map((chapter) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{chapter}</Typography>
            </AccordionSummary>
            {chapterPeges[chapter].map((page) => {
              return (
                <AccordionDetails>
                  <Typography>
                    {page}
                  </Typography>
                </AccordionDetails>
              )
            })}
          </Accordion>
        )
      })}
    </div>
      </Drawer>
  )
}

export default LeftDrawer
