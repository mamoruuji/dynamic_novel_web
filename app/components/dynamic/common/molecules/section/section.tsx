'use client'

import {
  Alert,
  Box,
  Container,
  CircularProgress,
  Typography,
} from '@mui/material'
import { useAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { isEmptyObject } from 'src/libs/util'
import useSWR from 'swr'

import {
  IconSpace,
  Illustration,
  LineBubble,
  Monologue,
  ShoutBubble,
  ThoughtBubble,
} from '@/components/dynamic/common/molecules'
import { sectionsAtom } from '@/states/operation-dynamic.ts'

import styles from './section.module.sass'
import Grid from '@mui/material/Grid2'

export const Section = ({ section }) => {
  let contents
  switch (section.typeSection) {
    case 'monologue':
      return (
        <Container className={styles.section}>
          <Monologue section={section} />
        </Container>
      )
      break
    case 'image':
      return (
        <Container className={styles.section} sx={{ alignContent: 'center' }}>
          <Illustration section={section} />
        </Container>
      )
      break
    case 'line-bubble':
      contents = <LineBubble section={section} />
      break
    case 'shout-bubble':
      contents = <ShoutBubble section={section} />
      break
    case 'thought-bubble':
      contents = <ThoughtBubble section={section} />
      break
  }

  return (
    <Grid container spacing={2} className={styles.section}>
      <Grid size={2}>
        <IconSpace section={section} position={'left'} />
      </Grid>
      <Grid size={8}>{contents}</Grid>
      <Grid size={2}>
        <IconSpace section={section} position={'right'} />
      </Grid>
    </Grid>
  )
}
