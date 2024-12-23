import Image from 'next/image'
import { Box, Typography } from '@mui/material'

export const Terms = ({ terms }) => {
  const imageWidth = '160'
  const imageHeight = '160'
  const imageUrl = '/images/test3.png'

  return (
    <>
      {terms.map((term, key) => {
        return (
          <Box key={key}>
            <Image
              priority
              src={imageUrl}
              width={imageWidth}
              height={imageHeight}
              className='w-full h-auto object-cover'
              alt='text'
            />
            <Typography variant='h5' component='div'>
              {term.name}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {term.text}
            </Typography>
          </Box>
        )
      })}
    </>
  )
}
