import { Paper } from '@mui/material'
import { Text } from '../../atoms'
import styles from './thought-bubble.module.sass'

export const ThoughtBubble = ({section}) => {
  return(
    <Paper
      className={`${styles[`${section.typePosition}-${section.typeSection}`]} ${styles.bubble}`}
      sx={{
        color: `var(--${section.textColor})`,
        backgroundColor: `var(--${section.frameColor})`,
        border: `5px solid var(--border-${section.frameColor})`,
        '&::before': {
          background: `var(--border-${section.frameColor})`
        },
        '&::after': {
          background: `var(--border-${section.frameColor})`
        }
      }}
    >
      <Text font={section.font}>{section.text}</Text>
    </Paper>
  )
}
