'use client'

import { TabContext, TabList, TabPanel } from '@mui/lab'
import {
  Alert,
  Box,
  CircularProgress,
  Divider,
  Tab,
  Typography,
} from '@mui/material'
import { useAtom } from 'jotai'
import { useParams, usePathname } from 'next/navigation'
import { useState } from 'react'
import { isEmptyObject } from 'src/libs/util'
import useSWR from 'swr'

import { Drawer,DrawerHeaderWithIcon } from '@/components/common/atoms'
import { Terms } from '@/components/terms/read/molecules'
import { rightDrawerStateAtom } from '@/states/drawer-state.ts'
import { termsAtomFamily } from '@/states/operation-dynamic.ts'

export const RightDrawer = () => {
  const [rightOpen, setRightOpen] = useAtom(rightDrawerStateAtom)
  const { chapter_id, dynamic_id, page_id, user_id } = useParams()
  const router = usePathname()
  const [dynamicTerms, setDynamicTerms] = useAtom(termsAtomFamily('dynamic'))
  const [chapterTerms, setChapterTerms] = useAtom(termsAtomFamily('chapter'))
  const [pageTerms, setPageTerms] = useAtom(termsAtomFamily('page'))

  const isOverview = !page_id && router.includes('dynamic')
  const isPage = page_id && router.includes('dynamic')
  const isUserProfile = !isOverview && !isPage && router.includes('user')
  const isSearch = router.includes('search')
  const [value, setValue] = useState('1')

  const url =
    !isUserProfile && !isSearch ? `/api/dynamic/${dynamic_id}?dummyTerm` : null
  const { data, error, isLoading } = useSWR(url, {
    onSuccess: (data) => {
      if (typeof data == 'undefined') return
      setDynamicTerms(data?.terms || [])
      const chapter = data.chapters?.find(
        (chapter) => chapter.chapterId == chapter_id,
      )
      const page = chapter?.pages?.find((page) => page.pageId == page_id)

      setChapterTerms(chapter?.terms || [])
      setPageTerms(page?.terms || [])
    },
  })

  if (error) return <Alert severity='warning'>{error}</Alert>
  if (isLoading) return <CircularProgress />
  if (isEmptyObject(data)) return <Typography>No data</Typography>

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
