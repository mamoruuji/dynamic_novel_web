'use client'

import Image from 'next/image'

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
import { useRecoilState } from 'recoil'
import { useFormState } from 'react-dom'
import { UpdateUser } from 'app/actions/update-user'
import { userAtom } from '@/states/operation-user.ts'
import styles from './user-detail.module.sass'

import { useEffect, useRef } from 'react'

export const UserDetail = () => {
  const [user, setUser] = useRecoilState(userAtom)
  const ref = useRef(true)
  const ref2 = useRef(true)
  const [formState, formAction] = useFormState(UpdateUser, {})

  const imageWidth = 360
  const imageHeight = 360

  const setUserPenName = (event) => {
    setUser((prevState) => ({
      ...prevState,
      penName: event.target.value,
    }))
  }

  const setUserText = (event) => {
    setUser((prevState) => ({
      ...prevState,
      text: event.target.value,
    }))
  }

  useEffect(() => {
    if (ref.current) {
      ref.current = false
      return
    }
    if (ref2.current) {
      ref2.current = false
      return
    }

    setUser(formState)
  }, [formState, formAction])

  let imageUrl =
    dynamic.imageUrl !== undefined ? dynamic.imageUrl : '/images/testCover.png'

  return (
    <Container className={styles['user-detail']}>
      <Box>
        <Box className={styles.image}>
          <Avatar src={imageUrl} alt='icon' style={{ borderRadius: '20px' }} />
          {/* <Image
            priority
            src={imageUrl}
            width={imageWidth}
            height={imageHeight}
            className='w-full h-auto object-cover'
            alt={user?.name || 'User Image'}
          /> */}
        </Box>
        <Box className={styles.detail}>
          <Box mb={2}>
            <TextField
              name='penName'
              value={user.penName || ''}
              onChange={setUserPenName}
              sx={{ '& .MuiInputBase-input': { height: 50 }, width: 400 }}
              placeholder='ペンネーム'
            />
          </Box>
          <Box mb={2}>
            <TextField
              name='text'
              value={user.text || ''}
              onChange={setUserText}
              sx={{ '& .MuiInputBase-input': { height: 50 }, width: 400 }}
              placeholder='自己紹介'
              multiline
              rows={7}
            />
          </Box>
          <Box mb={2}>
            <Typography component='div'>非公開ログイン情報</Typography>
            <Typography component='div'>{user.name}</Typography>
            <Typography component='div'>{user.email}</Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
