'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useRef } from 'react'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Container,
  TextField,
  Typography,
} from '@mui/material'
import styles from './user-detail.module.sass'

import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import { poster } from 'src/libs/util'

export const UserDetail = () => {
  const { user_id } = useParams()
  const url = `/api/user/${user_id}`
  const { data, mutate } = useSWR(url)
  const formRef = useRef()

  const { trigger, isMutating } = useSWRMutation(url, poster, {
    onSuccess: (newData) => {
      mutate(newData, false)
    },
  })
  const imageUrl =
    data.imageUrl !== 'no_image' ? data.imageUrl : '/images/NO_IMAGE.jpg'

  return (
    <Container className={styles['user-detail']}>
      <Box>
        <Box className={styles.image}>
          <Avatar src={imageUrl} alt='icon' style={{ borderRadius: '20px' }} />
        </Box>
        <Box className={styles.detail}>
          <form ref={formRef}>
            <Box mb={2}>
              <TextField
                name='penName'
                value={data.penName || ''}
                // onChange={setUserPenName}
                sx={{ '& .MuiInputBase-input': { height: 50 }, width: 400 }}
                placeholder='ペンネーム'
              />
            </Box>
            <Box mb={2}>
              <TextField
                name='text'
                value={data.text || ''}
                // onChange={setUserText}
                sx={{ '& .MuiInputBase-input': { height: 50 }, width: 400 }}
                placeholder='自己紹介'
                multiline
                rows={7}
              />
            </Box>
            <Box mb={2}>
              <Typography variant='h3' component='div'>
                非公開ログイン情報
              </Typography>
              <Typography component='div'>
                　ログインネーム：{data.name}
              </Typography>
              <Typography component='div'>
                登録メールアドレス：{data.email}
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </Container>
  )
}
