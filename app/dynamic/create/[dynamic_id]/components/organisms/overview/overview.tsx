import Image from 'next/image'
import Link from 'next/link'

import { ImageCrop } from '../../atoms'
import { useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { SetDynamic } from 'app/actions/create.ts'

import {
  Box,
  Container,
  FormGroup,
  Input,
  TextField,
  Typography,
  IconButton,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import { titleAtom, overviewAtom, dynamicAtom} from '@/states/operation-dynamic.ts'
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
  const [dynamic, setDynamic] = useRecoilState(dynamicAtom)
  const ref = useRef(true)
  const ref2 = useRef(true)
  const [formState, formAction] = useFormState(SetDynamic, {})

  const setTitle = (event) => {
    setDynamic((prevState) => ({
      ...prevState,
      title: event.target.value,
    }))
  }

  const setOverview = (event) => {
    setDynamic((prevState) => ({
      ...prevState,
      overview: event.target.value,
    }))
  }

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
    setDynamic(formState)
  }, [formState, formAction])

  const imageWidth = '360'
  const imageHeight = '640'
  let imageUrl = '/images/testCover.png'
  if(dynamic.imagePath !== undefined){
    imageUrl = '/images/testCover.png'
  // }else{
  //   imageUrl = dynamic.imagePath
  }

  return (
    <Box className={styles.overview}>
      <Box className={styles.cover}>
        <Image
          src={imageUrl}
          width={imageWidth}
          height={imageHeight}
          className='w-full h-auto object-cover'
          alt='text'
        />
        <ImageCrop />
      </Box>
      <form action={formAction}>
        <FormGroup>
          <Box className={styles.detail}>
            <Box mb={2}>
              <TextField
                name='title'
                value={dynamic.title || ""}
                onChange={setTitle}
                sx={{ "& .MuiInputBase-input": { height: 50 }, width: 400 }}
                placeholder='作品タイトル'
                variant="outlined"
                className={styles.h3TextField}
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
                name='overview'
                value={dynamic.overview || ""}
                onChange={setOverview}
                sx={{ "& .MuiInputBase-input": { height: 50 }, width: 400 }}
                placeholder='作品概要'
                multiline
                rows={17}
              />
            </Box>
          </Box>
        </FormGroup>
        <Input type="hidden" name='user-id' userid={dynamic.userId} />
        <Input type="hidden" name='dynamic-id' dynamicid={dynamic.dynamicId} />
        <Input type="hidden" name='type-of-image' typeofimage={'illustration'} />
      </form>
    </Box>
  )
}
