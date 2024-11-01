import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import './icon.module.sass'

export const Icon = () => {
  const imageWidth = '120'
  const imageHeight = '160'

  return (
    <Box className='icon'>
      <Image
        priority
        src='/images/test3.png'
        width={imageWidth}
        height={imageHeight}
        alt='test'
      />
      <Typography>★アイコン名★</Typography>
    </Box>
  )
}
