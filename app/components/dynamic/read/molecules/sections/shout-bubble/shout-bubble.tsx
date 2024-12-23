import { Paper } from '@mui/material'
import { Text } from '@/components/dynamic/read/atoms'
import styles from './shout-bubble.module.sass'

export const ShoutBubble = ({ section }) => {
  return (
    <Paper
      className={styles['shout-bubble-column']}
      sx={{
        '&::before': {
          background: `
            linear-gradient(45deg, var(--border-${section.frameColor}) 50%, transparent 50%),
            linear-gradient(-45deg, var(--border-${section.frameColor}) 50%, transparent 50%)
          `,
        },
        '&::after': {
          background: `
            linear-gradient(135deg, var(--border-${section.frameColor}) 50%, transparent 50%),
            linear-gradient(-135deg, var(--border-${section.frameColor}) 50%, transparent 50%)
          `,
        },
      }}
    >
      <Paper
        className={styles['shout-bubble-row']}
        sx={{
          color: `var(--${section.textColor})`,
          background: `var(--border-${section.frameColor})`,
          '&::before': {
            background: `
              linear-gradient(315deg, var(--border-${section.frameColor}) 50%, transparent 52%),
              linear-gradient(45deg, transparent 50%, var(--border-${section.frameColor}) 50%)
            `,
          },
          '&::after': {
            background: `
              linear-gradient(45deg, var(--border-${section.frameColor}) 50%, transparent 52%),
              linear-gradient(315deg, transparent 50%, var(--border-${section.frameColor}) 50%)
            `,
          },
        }}
      >
        <Text font={section.font}>{section.text}</Text>
      </Paper>
    </Paper>
  )
}
