'use client'

import * as React from 'react'
import useTheme from '@mui/material/styles/useTheme'
import Image from 'next/image'

import { DrawerHeader } from './drawerHeader'
import { rightDrawerStateAtom } from '../../states/drawerState'
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

type itemType = {
  name: string
  url: string
  text: string
}

export const RightDrawer = () => {
  const imageWidth = '120'
  const imageHeight = '160'

  const item: itemType = {
    name: '用語名',
    url: '/images/test3.png',
    text: '説明文',
  }

  const theme = useTheme()
  const [rightOpen, setRightOpen] = useRecoilState(rightDrawerStateAtom)

  return (
    <Drawer
      variant='persistent'
      anchor='right'
      open={rightOpen}
      width={process.env.NEXT_PUBLIC_DRAWERWIDTH}
      sx={{
        flexShrink: '0',
        '& .MuiDrawer-paper': {
          top: '64px',
          width: process.env.NEXT_PUBLIC_DRAWERWIDTH,
          // boxSizing: 'border-box',
        },
      }}
    >
      <DrawerHeader className='justify-start'>
        <IconButton onClick={() => setRightOpen(false)}>
          {theme.direction === 'rtl' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Image
        src={item.url}
        width={imageWidth}
        height={imageHeight}
        className='w-full h-auto object-cover'
        alt='text'
      />
      <Typography>{item.name}</Typography>
      <Typography>{item.text}</Typography>
    </Drawer>
  )
}
