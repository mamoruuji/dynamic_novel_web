import { Paper } from '@mui/material'

import { SectionText } from '@/components/dynamic/common/atoms'

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
      <SectionText size={section.textSize} font={section.typeFont}>
        {section.text}
      </SectionText>
    </Paper>
  )
}
