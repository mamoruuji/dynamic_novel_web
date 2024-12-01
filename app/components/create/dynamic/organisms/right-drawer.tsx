'use client'

import Image from 'next/image'

import { DrawerHeaderWithIcon, Drawer } from '@/components/common/atoms'
import { useAtom, useAtomValue } from 'jotai'
import { rightDrawerStateAtom } from '@/states/drawer-state.ts'
import { termsAtom } from '@/states/operation-dynamic.ts'
import { Terms } from '../molecules'
import { AddTermButton } from '../atoms'

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
  const [rightOpen, setRightOpen] = useAtom(rightDrawerStateAtom)
  const dynamicTerms = useAtomValue(termsAtom('dynamic'))
  const chapterTerms = useAtomValue(termsAtom('chapter'))
  const pageTerms = useAtomValue(termsAtom('page'))

  return (
    <Drawer anchor='right' open={rightOpen}>
      <DrawerHeaderWithIcon
        onClose={() => setRightOpen(false)}
        anchor='right'
      />
      <Divider />
      {dynamicTerms.length !== 0 && (
        <>
          <Terms terms={dynamicTerms} />
          <AddTermButton />
        </>
      )}
      {chapterTerms.length !== 0 && (
        <>
          <Divider />
          <Box display='flex' alignItems='center'>
            <Typography variant='h2'>　章</Typography>
          </Box>
          <Terms terms={chapterTerms} />
          <AddTermButton />
        </>
      )}
      {pageTerms.length !== 0 && (
        <>
          <Divider />
          <Box display='flex' alignItems='center'>
            <Typography variant='h2'>　ページ</Typography>
          </Box>
          <Terms terms={pageTerms} />
          <AddTermButton />
        </>
      )}
    </Drawer>
  )
}
