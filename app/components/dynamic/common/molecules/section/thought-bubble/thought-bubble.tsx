import { Paper } from '@mui/material'

import { SectionText } from '@/components/dynamic/common/atoms'

import styles from './thought-bubble.module.sass'

export const ThoughtBubble = ({ section }) => {
  return (
    <Paper
      className={`${styles[`${section.typePosition}-${section.typeSection}`]} ${styles.bubble}`}
      sx={{
        '&::after': {
          background: `var(--border-${section.frameColor})`,
        },
        '&::before': {
          background: `var(--border-${section.frameColor})`,
        },
        backgroundColor: `var(--${section.frameColor})`,
        border: `5px solid var(--border-${section.frameColor})`,
        color: `var(--${section.textColor})`,
      }}
    >
      <SectionText size={section.textSize} font={section.typeFont}>
        {section.text}
      </SectionText>
    </Paper>
  )
}
