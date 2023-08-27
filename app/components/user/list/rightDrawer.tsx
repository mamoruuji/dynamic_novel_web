"use client"

import * as React from 'react'
import Image from 'next/image'
import useTheme from '@mui/material/styles/useTheme'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import DrawerHeader from './drawerHeader'
import { rightDrawerStateAtom } from "../../states/drawerState"
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

type itemType = {
    name: string;
    url: string;
    text: string;
}

const RightDrawer = () => {

  const imageWidth = 100;
  const imageHeight = 100;

  const item:itemType  = {
    name: "用語名",
    url: "/images/test3.png",
    text: "説明文",
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
        <Image src={item.url} width={imageWidth} height={imageHeight} alt="text"/>
        <Typography>{item.name}</Typography>
        <Typography>{item.text}</Typography>
      </Drawer>
  )
}

export default RightDrawer
