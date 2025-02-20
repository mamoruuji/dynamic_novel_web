import { Box, CircularProgress,Divider, Typography } from '@mui/material'
import Image from 'next/image'
// import { AddTermButton } from '@/components/terms/edit/atoms'

export const Terms = ({ terms }) => {
  const imageWidth = '160'
  const imageHeight = '160'
  const imageUrl = '/images/test3.png'

  if (!terms) return <CircularProgress />
  return (
    <>
      {terms.map((term, key) => (
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
          <Divider />
        </Box>
      ))}
      {/* <AddTermButton /> */}
    </>
  )
}
