
import Image from 'next/image'
import { Box } from '@mui/material'
import styles from './illustration.module.sass'

export const Illustration = ({ section }) => {
  let imageHeight = '495'
  let imageWidth = '880'

  return(
    <Box className={styles['illustration-image']}>
      <Image
        priority
        src='/images/testIllustration.png'
        width={imageWidth}
        height={imageHeight}
        alt='test'
      />
    </Box>
  )
}
