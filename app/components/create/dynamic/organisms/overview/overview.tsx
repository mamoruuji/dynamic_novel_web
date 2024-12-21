import Image from 'next/image'

import { useParams } from 'next/navigation'
import { useRef } from 'react'
import {
  Box,
  Container,
  FormGroup,
  Input,
  InputLabel,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import {
  titleAtom,
  overviewAtom,
  dynamicAtom,
} from '@/states/operation-dynamic.ts'
import { useAtom } from 'jotai'
import { ImageCropper } from '@/components/common/molecules'

import styles from './overview.module.sass'
import { TagEdit, TagDisplay } from '@/components/common/atoms'

import { formatDate } from 'src/libs/util'
import useSWR from 'swr'

export const Overview = () => {
  const [dynamic, setDynamic] = useAtom(dynamicAtom)
  const { dynamic_id } = useParams()
  const url = `/api/dynamic/${dynamic_id}`
  const { data } = useSWR(url)

  const formRef = useRef()

  const imageWidth = '360'
  const imageHeight = '640'
  // let imageUrl =
  //   dynamic.imageUrl !== undefined ? dynamic.imageUrl : '/images/testCover.png'
  let imageUrl = '/images/testCover.png'

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
        <ImageCropper type='cover' />
      </Box>
      <form ref={formRef}>
        <FormGroup>
          <Box className={styles.detail}>
            <Box mb={2}>
              <TextField
                name='title'
                value={data.title || ''}
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
                <TagEdit />
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
