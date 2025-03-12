'use client'

import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { formatDate, isEmptyObject } from 'src/libs/util'
import useSWR from 'swr'

import { TagDisplay, TagEdit } from '@/components/common/atoms'

import styles from './overview.module.sass'

export const Overview = () => {
  const { dynamic_id } = useParams()
  const url = `/api/dynamic/${dynamic_id}?dummyDynamic`
  const { data, error, isLoading } = useSWR(url)

  const imageWidth = 360
  const imageHeight = 640

  // const imageUrl =
  //   data.imageUrl !== 'no_image' ? data.imageUrl : '/images/NO_IMAGE.jpg'
  const imageUrl = '/images/NO_IMAGE.jpg'

  if (error) return <Alert severity='warning'>{error}</Alert>
  if (isLoading) return <CircularProgress />
  if (isEmptyObject(data)) return <Typography>No data</Typography>

  return (
    <Box className={styles.overview}>
      <Box className={styles.cover}>
        <Image
          priority
          src={imageUrl}
          width={imageWidth}
          height={imageHeight}
          className='w-full h-auto object-cover'
          alt='text'
        />
      </Box>
      <Box className={styles.detail}>
        <Box mb={2}>
          <Typography variant='h3' component='div'>
            {data.name}
          </Typography>
        </Box>
        <Box className={styles['detail-two']}>
          <Box>
            <Typography variant='h6'>　作者：{data.penName}</Typography>
          </Box>
          <Box mb={2}>
            <Typography variant='h6'>
              　更新日時：{formatDate(data.updatedTime)}
            </Typography>
          </Box>
          <Box mb={2}>
            <TagDisplay tags={data.tags} />
          </Box>
          <Box mb={2}>
            <TagEdit />
          </Box>
        </Box>
        <Box>
          <Typography variant='body2' color='text.secondary'>
            {data.overview}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
