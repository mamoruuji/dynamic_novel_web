import { Paper } from '@mui/material'
import { Text } from '../../../atoms'
import styles from './monologue.module.sass'

export const Monologue = ({section}) => {
  return(
    <Paper
      className={styles.monologue}
      sx={{
        color: `var(--${section.textColor})`,
        backgroundColor: `var(--border-${section.frameColor})`
      }}
    >
      <Text font={section.font}>{section.text}</Text>
    </Paper>
  )
}
