
import Image from 'next/image'
import { Box } from '@mui/material'
import styles from './illustration.module.sass'

export const Illustration = ({section}) => {
  let imageHeight = '500'
  let imageWidth = '500'
  switch (section.image.type) {
    case 'illustration':
      imageHeight = '495'
      imageWidth = '880'
      break
    case 'icon':
      imageHeight = '500'
      imageWidth = '500'
      break
    case 'cover':
      imageHeight = '1280'
      imageWidth = '720'
      break
  }

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
