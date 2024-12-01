import { Box, CircularProgress } from '@mui/material'
import { useAtomValue } from 'jotai'
import { pageAtom } from '@/states/operation-dynamic.ts'
import {
  IconSpace,
  Monologue,
  LineBubble,
  ThoughtBubble,
  ShoutBubble,
  Illustration,
} from '../../molecules'
import styles from './sections.module.sass'

export const Sections = () => {
  const page = useAtomValue(pageAtom)

  if (!page.sections) return <CircularProgress />

  return (
    <>
      {page.sections.map((section, key) => {
        let content
        switch (section.typeSection) {
          case 'monologue':
            content = <Monologue section={section} />
            break
          case 'image':
            content = <Illustration section={section} />
            break
          case 'line-bubble':
            content = <LineBubble section={section} />
            break
          case 'shout-bubble':
            content = <ShoutBubble section={section} />
            break
          case 'thought-bubble':
            content = <ThoughtBubble section={section} />
            break
        }

        return (
          <Box className={styles.section} key={key}>
            <IconSpace section={section} position={'left'} />
            {content}
            <IconSpace section={section} position={'right'} />
          </Box>
        )
      })}
    </>
  )
}
