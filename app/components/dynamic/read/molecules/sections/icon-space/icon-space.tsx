import Image from 'next/image'
import { Box } from '@mui/material'
import styles from './icon-space.module.sass'
import { Icon } from '@/components/dynamic/read/atoms'

export const IconSpace = ({ section, position }) => {
  if (section.typeSection.includes('bubble'))
    return (
      <Box className={styles['icon-space']}>
        {section.typePosition === position && <Icon section={section} />}
      </Box>
    )
}
