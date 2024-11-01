'use client'
import Image from 'next/image'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Typography,
  Container,
} from '@mui/material'
import { useRecoilValue } from 'recoil'
import { userAtom } from '@/states/operation-user.ts'
import styles from './user-detail.module.sass'

import { useState, useEffect, useRef } from 'react'

export const UserDetail = () => {
  const user = useRecoilValue(userAtom)
  const ref = useRef(true)
  const ref2 = useRef(true)
  const [imageUrl, setImageUrl] = useState('/images/testCover.png')

  const imageWidth = 360
  const imageHeight = 360

  useEffect(() => {
    if (ref.current) {
      ref.current = false
      return
    }
    // デバック用 StrictModeの２回実行対策
    if (ref2.current) {
      ref2.current = false
      return
    }
    if(user?.image !== undefined){
      setImageUrl(user.image)
    }
  }, [user])

  return (
    <Container className={styles['user-detail']}>
      <Box>
        <Box className={styles.image}>
          <Avatar
            src={imageUrl}
            alt='icon'
            style={{ borderRadius: '20px' }}
          />
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
            <Typography variant='h3' component='div'>
              {user.name}
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography variant='h3' component='div'>
              {user.email}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
