import { Box, Typography } from '@mui/material'

export const section = () => {
  const imageWidth = '120'
  const imageHeight = '160'
  return (
    <Box className='section'>
      <Box className='left-side'>
        <Box className='icon'>
          <Image
            src='/images/test3.png'
            width={imageWidth}
            height={imageHeight}
            alt='test'
          />
          <Typography>★アイコン名★</Typography>
        </Box>
        <Box className='talk-bubble'>
          ★吹き出し内の文章★ ★吹き出し内の文章★ ★吹き出し内の文章★
          ★吹き出し内の文章★ ★吹き出し内の文章★ ★吹き出し内の文章★
          ★吹き出し内の文章★ ★吹き出し内の文章★ ★吹き出し内の文章★
          ★吹き出し内の文章★ ★吹き出し内の文章★ ★吹き出し内の文章★
          ★吹き出し内の文章★ ★吹き出し内の文章★
        </Box>
      </Box>
    </Box>
  )
}
