'use client'

import * as React from 'react'
import useTheme from '@mui/material/styles/useTheme'

import { DrawerHeader } from './drawerHeader'
import { leftDrawerStateAtom } from '../../states/drawerState'
import { useRecoilState } from 'recoil'

import {
  Box,
  Drawer,
  Divider,
  IconButton,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// import {
//   ArrowRightIcon,
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   ExpandMoreIcon,
// } from '@mui/icons-material'

// 任意の文字列キーを許容したオブジェクト
type chapterPegesType = { [chapter: string]: string[] }

export const LeftDrawer = () => {
  const chapterPeges: chapterPegesType = {
    章1: ['ページ1-1', 'ページ1-2', 'ページ1-3'],
    章2: [],
    章3: ['ページ3-3'],
  }

  const theme = useTheme()
  const [leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)

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
      variant='persistent'
      anchor='left'
      open={leftOpen}
    >
      <DrawerHeader className='justify-end'>
        <IconButton onClick={() => setLeftOpen(false)}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box>
        {Object.keys(chapterPeges).map((chapter, key) => {
          return (
            <Accordion key={key}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-content-${key}`}
                id={`panel-header-${key}`}
              >
                <Typography>{chapter}</Typography>
              </AccordionSummary>
              {chapterPeges[chapter].map((page, index) => {
                return (
                  <AccordionDetails key={index}>
                    <List component='div' disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={page} />
                      </ListItemButton>
                    </List>
                  </AccordionDetails>
                )
              })}
            </Accordion>
          )
        })}
      </Box>
    </Drawer>
  )
}
