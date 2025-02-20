import { Paper } from '@mui/material'

import { Text } from '@/components/dynamic/read/atoms'

import styles from './line-bubble.module.sass'

export const LineBubble = ({ section }) => {
  return (
    <Paper
      className={`${styles[`${section.typePosition}-${section.typeSection}`]} ${styles.bubble}`}
      sx={{
        '&::after': {
          background: `var(--${section.frameColor})`,
        },
        '&::before': {
          background: `var(--border-${section.frameColor})`,
        },
        backgroundColor: `var(--${section.frameColor})`,
        border: `5px solid var(--border-${section.frameColor})`,
        color: `var(--${section.textColor})`,
      }}
    >
      <Text font={section.font}>{section.text}</Text>
    </Paper>
  )
}
