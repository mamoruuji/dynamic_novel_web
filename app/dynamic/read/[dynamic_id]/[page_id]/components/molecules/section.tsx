import Image from 'next/image'
import { Box, Typography, Paper } from '@mui/material'
import {
  antiqueFont,
  minchoFont,
  gothicFont,
  horrorFont,
  weakFont,
  cuteFont,
} from 'public/fonts/fonts.ts'

export const Section = () => {
  // type, potision, bubble, image, font
  const imageWidth = '120'
  const imageHeight = '160'

  //   id         Int      @id @default(autoincrement()) @map(name: "section_id")
  // name       String   @db.VarChar(30)
  // order      Int
  // frameColor String?  @map(name: "frame_color") @db.VarChar(7)
  // text       String?
  // textColor  String?  @map(name: "text_color") @db.VarChar(7)
  // textSize   Int?     @map(name: "text_size")
  // pageId     Int      @map(name: "page_id")
  // typeId     Int?     @map(name: "type_id")
  // positionId Int?     @map(name: "position_id")
  // bubbleId   Int?     @map(name: "bubble_id")
  // imageId    Int?     @map(name: "image_id")
  // fontId     Int?     @map(name: "font_id")
  return (
    <>
      <Box className='section'>
        <Box className='icon left-icon-position'>
          <Image
            src='/images/test3.png'
            width={imageWidth}
            height={imageHeight}
            alt='test'
          />
          <Typography>★アイコン名★</Typography>
        </Box>
        <Paper
          elevation={24}
          className='left-talk-bubble bubble center-text-position'
        >
          <Typography className={`${minchoFont.className}`}>
            なんか喋ってます
          </Typography>
        </Paper>
        <Box className='icon right-icon-position'></Box>
      </Box>
      <Box className='section'>
        <Box className='icon left-icon-position'></Box>
        <Paper
          elevation={24}
          className='right-talk-bubble bubble center-text-position'
        >
          <Typography className={gothicFont.className}>なんで？</Typography>
        </Paper>
        <Box className='icon right-icon-position'>
          <Image
            src='/images/test3.png'
            width={imageWidth}
            height={imageHeight}
            alt='test'
          />
          <Typography>★アイコン名★</Typography>
        </Box>
      </Box>
      <Box className='section'>
        <Box className='icon left-icon-position'>
          <Image
            src='/images/test3.png'
            width={imageWidth}
            height={imageHeight}
            alt='test'
          />
          <Typography>★アイコン名★</Typography>
        </Box>
        <Paper
          elevation={24}
          className='left-thought-bubble bubble center-text-position'
        >
          <Typography className={horrorFont.className}>
            ぎやああああああああああ!!??
          </Typography>
        </Paper>
        <Box className='icon right-icon-position'>
          <Image
            src='/images/test3.png'
            width={imageWidth}
            height={imageHeight}
            alt='test'
          />
          <Typography>★アイコン名★</Typography>
        </Box>
      </Box>
      <Box className='section'>
        <Box className='icon left-icon-position'></Box>
        <Paper
          elevation={24}
          className='right-thought-bubble bubble center-text-position'
        >
          <Typography className={antiqueFont.className}>
            なんか喋ってます
          </Typography>
        </Paper>
        <Box className='icon right-icon-position'>
          <Image
            src='/images/test3.png'
            width={imageWidth}
            height={imageHeight}
            alt='test'
          />
          <Typography>★アイコン名★</Typography>
        </Box>
      </Box>
      <Box className='section'>
        <Box className='icon left-icon-position'>
          <Image
            src='/images/test3.png'
            width={imageWidth}
            height={imageHeight}
            alt='test'
          />
          <Typography>★アイコン名★</Typography>
        </Box>
        <Paper
          elevation={24}
          className='shout-bubble-column center-text-position'
        >
          <Paper elevation={24} className='shout-bubble-row'>
            <Typography className={weakFont.className}>
              なにしにきたんだよ
            </Typography>
          </Paper>
        </Paper>
        <Box className='icon right-icon-position'></Box>
      </Box>
      <Box className='section'>
        <Box className='icon left-icon-position'>
          <Image
            src='/images/test3.png'
            width={imageWidth}
            height={imageHeight}
            alt='test'
          />
          <Typography>★アイコン名★</Typography>
        </Box>
        <Paper
          elevation={24}
          className='shout-bubble-column center-text-position'
        >
          <Paper elevation={24} className='shout-bubble-row'>
            <Typography className={cuteFont.className}>ばぁ</Typography>
          </Paper>
        </Paper>
        <Box className='icon right-icon-position'></Box>
      </Box>
      <Box className='section'>
        <Paper elevation={24} className='text'>
          <Typography>
            ★吹き出し内の文章★ ★吹き出し内の文章★ ★吹き出し内の文章★
            ★吹き出し内の文章★ ★吹き出し内の文章★ ★吹き出し内の文章★
            ★吹き出し内の文章★ ★吹き出し内の文章★ ★吹き出し内の文章★
            ★吹き出し内の文章★ ★吹き出し内の文章★ ★吹き出し内の文章★
            ★吹き出し内の文章★ ★吹き出し内の文章★
          </Typography>
        </Paper>
      </Box>
    </>
  )
}
