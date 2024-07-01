'use client'

import Image from 'next/image'

import { DrawerHeaderWithIcon, Drawer } from '@/common/atoms'
import { useRecoilState, useRecoilValue } from 'recoil'
import { rightDrawerStateAtom } from '@/states/drawer-state.ts'
import { termsAtom } from '@/states/search-request.ts'
import { Terms } from '../molecules'

import {
  Box,
  Divider,
  IconButton,
  Typography,
  CircularProgress,
} from '@mui/material'

import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const RightDrawer = () => {
  const [rightOpen, setRightOpen] = useRecoilState(rightDrawerStateAtom)
  const dynamicTerms = useRecoilValue(termsAtom('dynamic'))
  const chapterTerms = useRecoilValue(termsAtom('chapter'))
  const pageTerms = useRecoilValue(termsAtom('page'))

  return (
    <Drawer anchor='right' open={rightOpen}>
      <DrawerHeaderWithIcon
        onClose={() => setRightOpen(false)}
        anchor='right'
      />
      <Divider />
      <Terms terms={dynamicTerms} />
      <Divider />
      <Box display='flex' alignItems='center'>
        <Typography variant='h2'>　章</Typography>
      </Box>
      <Terms terms={chapterTerms} />
      <Divider />
      <Box display='flex' alignItems='center'>
        <Typography variant='h2'>　ページ</Typography>
      </Box>
      <Terms terms={pageTerms} />
    </Drawer>
  )
}
