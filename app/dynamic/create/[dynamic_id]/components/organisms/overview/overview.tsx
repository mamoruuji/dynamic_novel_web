import Image from 'next/image'
import Link from 'next/link'

import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  TextField,
} from '@mui/material'
import { useRecoilValue } from 'recoil'
import { dynamicAtom } from '@/states/search-request.ts'
import styles from './overview.module.sass'

const formatDate = (isoString: string): string => {
  const date = new Date(isoString)

  const year = date.getFullYear()
  const month = ('0' + (date.getMonth() + 1)).slice(-2) // 月は0から始まるので1を足す
  const day = ('0' + date.getDate()).slice(-2)
  const hours = ('0' + date.getHours()).slice(-2)
  const minutes = ('0' + date.getMinutes()).slice(-2)
  const seconds = ('0' + date.getSeconds()).slice(-2)

  return `${year}/${month}/${day} ${hours}:${minutes}`
}

export const Overview = () => {
  const dynamic = useRecoilValue(dynamicAtom)

  const imageWidth = '360'
  const imageHeight = '640'
  let imageUrl = '/images/testCover.png'
  if(dynamic.imagePath !== undefined){
    imageUrl = '/images/testCover.png'
  // }else{
  //   imageUrl = dynamic.imagePath
  }

  return (
    <>
      <Container className={styles.overview}>
        <Box className={styles.cover}>
          <Image
            src={imageUrl}
            width={imageWidth}
            height={imageHeight}
            className='w-full h-auto object-cover'
            alt='text'
          />
        </Box>
        <Box className={styles.detail}>
          <Box mb={2}>
            <TextField
              sx={{ "& .MuiInputBase-input": { height: 50 }, width: 500 }}
              placeholder='作品タイトル'
              variant="outlined"
              className={styles.h3TextField}
              value={dynamic.title}
            />
          </Box>
          <Box className={styles['detail-two']}>
            <Box>
              <Typography variant='h6'>　作者：</Typography>
              <Typography variant='h6'>{dynamic.userName}</Typography>
            </Box>
            <Box mb={2} >
              <Typography variant='h6'>　更新日時：</Typography>
              <Typography variant='h6'>{formatDate(dynamic.updatedTime)}</Typography>
            </Box>
          </Box>
          <Box>
            <TextField
              sx={{ "& .MuiInputBase-input": { height: 50 }, width: 500 }}
              placeholder='作品概要'
              multiline
              rows={17}
            />
          </Box>
        </Box>
      </Container>
    </>
  )
}
