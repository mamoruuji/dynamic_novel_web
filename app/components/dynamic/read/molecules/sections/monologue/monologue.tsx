import { Paper } from '@mui/material'

import { Text } from '@/components/dynamic/read/atoms'

import styles from './monologue.module.sass'

export const Monologue = ({ section }) => {
  return (
    <Paper
      className={styles.monologue}
      sx={{
        backgroundColor: `var(--border-${section.frameColor})`,
        color: `var(--${section.textColor})`,
      }}
    >
      <Text font={section.font}>{section.text}</Text>
    </Paper>
  )
}
