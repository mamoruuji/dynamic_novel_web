'use client'

import EditIcon from '@mui/icons-material/Edit'
import {
  Alert,
  Box,
  CircularProgress,
  IconButton,
  Typography,
} from '@mui/material'
import { useAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { isEmptyObject } from 'src/libs/util'
import useSWR from 'swr'

import {
  AddSectionButton,
  EditSectionDialog,
  // EditSectionButton,
} from '@/components/dynamic/edit/atoms'
import { Section } from '@/components/dynamic/common/molecules'

import {
  sectionDialogStateAtom,
  updateSectionTargetAtom,
} from '@/states/dialog-state.ts'

import { sectionsAtom } from '@/states/operation-dynamic.ts'

import styles from './sections.module.sass'

import Grid from '@mui/material/Grid2'

export const Sections = () => {
  const [sections, setSections] = useAtom(sectionsAtom)

  const { chapter_id, dynamic_id, page_id } = useParams()
  const url = `/api/dynamic/${dynamic_id}?dummySection`
  const { data, error, isLoading } = useSWR(url, {
    onSuccess: (data) => {
      const chapter = data.chapters?.find(
        (chapter) => chapter.chapterId == chapter_id,
      )
      const page = chapter?.pages?.find((page) => page.pageId == page_id)
      const sections = page?.sections || []

      setSections(sections)
    },
  })

  // セクション編集
  const [sectionDialogOpen, setSectionDialogOpen] = useAtom(
    sectionDialogStateAtom,
  )
  const [updateSectionTarget, setUpdateSectionTarget] = useAtom(
    updateSectionTargetAtom,
  )

  const handleEditClick = (section) => {
    console.dir(section)
    setUpdateSectionTarget(section)
    setSectionDialogOpen(true)
  }

  if (error) return <Alert severity='warning'>{error}</Alert>
  if (isLoading) return <CircularProgress />
  if (isEmptyObject(data)) return <Typography>No data</Typography>

  return (
    <>
      {sections.map((section, key) => {
        return (
          <Box key={key}>
            <Section section={section} />
            <IconButton onClick={() => handleEditClick(section)}>
              <EditIcon />
            </IconButton>
          </Box>
        )
      })}
      <AddSectionButton />
      <EditSectionDialog />
    </>
  )
}
