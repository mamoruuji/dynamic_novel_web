import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import styles from './icon.module.sass'

export const Icon = ({ section }) => {
  const imageWidth = '120'
  const imageHeight = '120'
  return (
    <>
      <Box
        className={styles['icon-box']}
        sx={{
          border: `solid 3px var(--border-${section.frameColor})`
        }}
      >
        <Image
          className={styles['icon-img']}
          src='/images/test3.png'
          width={imageWidth}
          height={imageHeight}
          alt='test'
        />
      </Box>
      <Typography className={styles['icon-typography']}>
        {section.name}
      </Typography>
    </>
  )
}
