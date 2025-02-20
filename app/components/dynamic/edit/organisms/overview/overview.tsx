'use client'

import {
  Alert,
  Box,
  CircularProgress,
  FormGroup,
  Input,
  TextField,
  Typography,
} from '@mui/material'
import { useAtom } from 'jotai'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useRef } from 'react'
import { formatDate, isEmptyObject } from 'src/libs/util'
import useSWR from 'swr'

import { TagDisplay,TagEdit } from '@/components/common/atoms'
import { ImageCropper } from '@/components/common/molecules'
import {
  imageDialogStateAtom,
  tagDialogStateAtom,
} from '@/states/dialog-state.ts'

import styles from './overview.module.sass'

export const Overview = () => {
  const { dynamic_id } = useParams()
  const url = `/api/dynamic/${dynamic_id}`
  const { data, error, isLoading } = useSWR(url)
  const [imageDialogOpen, setImageDialogOpen] = useAtom(imageDialogStateAtom)
  const [tagDialogOpen, setTagDialogOpen] = useAtom(tagDialogStateAtom)

  const formRef = useRef()

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
        <ImageCropper type='cover' dialogOpen={imageDialogOpen} />
      </Box>
      <form ref={formRef}>
        <FormGroup>
          <Box className={styles.detail}>
            <Box mb={2}>
              <TextField
                name='title'
                value={data.name || ''}
                // onChange={setTitle}
                sx={{ '& .MuiInputBase-input': { height: 50 }, width: 400 }}
                placeholder='作品タイトル'
                variant='outlined'
                className={styles.h3TextField}
              />
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
                <TagEdit dialogOpen={tagDialogOpen} />
              </Box>
            </Box>
            <Box>
              <TextField
                name='overview'
                value={data.overview || ''}
                // onChange={setOverview}
                sx={{ '& .MuiInputBase-input': { height: 50 }, width: 400 }}
                placeholder='作品概要'
                multiline
                rows={17}
              />
            </Box>
          </Box>
          <Input type='hidden' name='dynamic-id' dynamicid={data.dynamicId} />
        </FormGroup>
      </form>
    </Box>
  )
}
