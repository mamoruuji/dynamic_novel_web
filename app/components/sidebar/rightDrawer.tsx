"use client"

import * as React from 'react'
import useTheme from '@mui/material/styles/useTheme'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import DrawerHeader from '../sidebar/drawerHeader'
import { rightDrawerStateAtom } from "app/states/drawerState"
import { useRecoilState } from "recoil"

import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

type sectionType = {
  [section_id: number]: {
    name: string;
    url: string;
    text: string;
  }
}

const RightDrawer = () => {
  const section:sectionType  = {
    1: {
      name: "name1",
      url: "url1",
      text: "text1",
    },
  }

  const theme = useTheme()
  const [ rightOpen, setRightOpen] = useRecoilState(rightDrawerStateAtom)

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
        anchor="right"
        open={rightOpen}
      >
        <DrawerHeader className="justify-start">
          <IconButton onClick={ () => setRightOpen(false) }>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        用語説明（画像、名前、説明）
        閉じる
      </Drawer>
  )
}

export default RightDrawer
