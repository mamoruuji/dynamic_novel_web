'use client'

import Image from 'next/image'

import { DrawerHeaderWithIcon, Drawer } from '@/common/atoms'
import { rightDrawerStateAtom } from '@/states/drawer-state.ts'
import { useRecoilState } from 'recoil'

import {
  Box,
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

  const [rightOpen, setRightOpen] = useRecoilState(rightDrawerStateAtom)

  return (
    <Drawer anchor='right' open={rightOpen}>
      <DrawerHeaderWithIcon
        onClose={() => setRightOpen(false)}
        anchor='right'
      />
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
