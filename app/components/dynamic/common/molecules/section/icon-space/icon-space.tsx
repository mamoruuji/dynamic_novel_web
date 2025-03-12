import { Box } from '@mui/material'

import { Icon } from '@/components/dynamic/common/atoms'

import styles from './icon-space.module.sass'

export const IconSpace = ({ position, section }) => {
  if (section.typeSection.includes('bubble'))
    return (
      <Box className={styles['icon-space']}>
        {section.typePosition === position && <Icon section={section} />}
      </Box>
    )
}
