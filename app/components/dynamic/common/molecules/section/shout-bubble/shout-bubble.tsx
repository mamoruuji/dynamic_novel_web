import { Paper } from '@mui/material'

import { SectionText } from '@/components/dynamic/common/atoms'

import styles from './shout-bubble.module.sass'

export const ShoutBubble = ({ section }) => {
  return (
    <Paper
      className={styles['shout-bubble-column']}
      sx={{
        '&::after': {
          background: `
            linear-gradient(135deg, var(--border-${section.frameColor}) 50%, transparent 50%),
            linear-gradient(-135deg, var(--border-${section.frameColor}) 50%, transparent 50%)
          `,
        },
        '&::before': {
          background: `
            linear-gradient(45deg, var(--border-${section.frameColor}) 50%, transparent 50%),
            linear-gradient(-45deg, var(--border-${section.frameColor}) 50%, transparent 50%)
          `,
        },
      }}
    >
      <Paper
        className={styles['shout-bubble-row']}
        sx={{
          '&::after': {
            background: `
              linear-gradient(45deg, var(--border-${section.frameColor}) 50%, transparent 52%),
              linear-gradient(315deg, transparent 50%, var(--border-${section.frameColor}) 50%)
            `,
          },
          '&::before': {
            background: `
              linear-gradient(315deg, var(--border-${section.frameColor}) 50%, transparent 52%),
              linear-gradient(45deg, transparent 50%, var(--border-${section.frameColor}) 50%)
            `,
          },
          background: `var(--border-${section.frameColor})`,
          color: `var(--${section.textColor})`,
        }}
      >
        <SectionText size={section.textSize} font={section.typeFont}>
          {section.text}
        </SectionText>
      </Paper>
    </Paper>
  )
}
