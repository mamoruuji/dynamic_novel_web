'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useParams, usePathname } from 'next/navigation'

import { DrawerHeaderWithIcon, Drawer } from '@/components/common/atoms'
import { useAtom } from 'jotai'
import { rightDrawerStateAtom } from '@/states/drawer-state.ts'
import { termsAtomFamily } from '@/states/operation-dynamic.ts'
// import { Terms as EditTerms } from '@/components/terms/edit/molecules'
// import { Terms as ReadTerms } from '@/components/terms/read/molecules'
import { Terms } from '@/components/terms/read/molecules'

import {
  Alert,
  Box,
  CircularProgress,
  Divider,
  Tab,
  Typography,
} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import useSWR from 'swr'
import { isEmptyObject } from 'src/libs/util'

export const RightDrawer = () => {
  const [rightOpen, setRightOpen] = useAtom(rightDrawerStateAtom)
  const { user_id, dynamic_id, chapter_id, page_id } = useParams()
  const router = usePathname()
  const [dynamicTerms, setDynamicTerms] = useAtom(termsAtomFamily('dynamic'))
  const [chapterTerms, setChapterTerms] = useAtom(termsAtomFamily('chapter'))
  const [pageTerms, setPageTerms] = useAtom(termsAtomFamily('page'))

  const isOverview = !page_id && router.includes('dynamic')
  const isPage = page_id && router.includes('dynamic')
  const isUserProfile = !isOverview && !isPage && router.includes('user')
  const isSearch = router.includes('search')
  const [value, setValue] = useState('1')

  if (!isUserProfile && !isSearch) {
    const url = `/api/dynamic/${dynamic_id}`
    const { data, error, isLoading } = useSWR(url)

    if (error) return <Alert severity='warning'>{error}</Alert>
    if (isLoading) return <CircularProgress />
    if (isEmptyObject(data)) return <Typography>No data</Typography>

    setDynamicTerms(data.terms)
    data.chapters.map((chapter) => {
      if (chapter_id === String(chapter.chapterId)) {
        setChapterTerms(chapter.terms)
        chapter.pages.map((page) => {
          if (page_id === String(page.pageId)) {
            setPageTerms(page.terms)
          }
        })
      }
    })
  }

  return (
    <Drawer anchor='right' open={rightOpen}>
      <DrawerHeaderWithIcon
        onClose={() => setRightOpen(false)}
        anchor='right'
      />
      <Divider />
      {(isPage || isOverview) && (
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={(event, newValue) => setValue(newValue)}
              aria-label='term tabs'
            >
              <Tab label='作品' value='1' />
              <Tab label='章' value='2' disabled={!chapter_id} />
              <Tab label='ページ' value='3' disabled={!page_id} />
            </TabList>
          </Box>
          <TabPanel value='1'>
            <Terms terms={dynamicTerms} />
          </TabPanel>
          <TabPanel value='2'>
            <Terms terms={chapterTerms} />
          </TabPanel>
          <TabPanel value='3'>
            <Terms terms={pageTerms} />
          </TabPanel>
        </TabContext>
      )}
    </Drawer>
  )
}
