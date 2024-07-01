import Image from 'next/image'
import Link from 'next/link'

import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
} from '@mui/material'
import { useRecoilValue } from 'recoil'
import { dynamicAtom } from '@/states/search-request.ts'

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

  const imageUrl = '/images/testCover.png'
  return (
    <>
      <Container
        style={{
          position: 'relative',
          width: 360,
          height: 640,
        }}
      >
        <Image
          src={imageUrl}
          alt='cover'
          fill
          style={{ objectFit: 'contain' }}
        />
      </Container>
      <Container>
        <Typography variant='h3' component='div'>
          {dynamic.title}
        </Typography>
        <Box style={{ textDecoration: 'none', color: 'inherit' }}>
          <Link href={`/user/${dynamic.userId}`}>
            <Box display='flex' alignItems='center'>
              <Typography variant='h5'>　作者：</Typography>
              <Typography variant='h5' style={{ marginLeft: '0.5rem' }}>
                {dynamic.userName}
              </Typography>
            </Box>
          </Link>
        </Box>
        <Box style={{ textDecoration: 'none', color: 'inherit' }}>
          <Box display='flex' alignItems='center'>
            <Typography variant='h5'>　投稿日時：</Typography>
            <Typography variant='h5'>
              {formatDate(dynamic.updatedTime)}
            </Typography>
          </Box>
        </Box>
        <Typography variant='body2' color='text.secondary'>
          {dynamic.overview}
        </Typography>
      </Container>
      {/* <Card key={dynamic.dynamicId} sx={{ display: 'flex', marginBottom: 2 }}>
        <CardMedia
          component='img'
          sx={{ width: 120, objectFit: 'cover' }}
          image={imageUrl}
          alt={dynamic.title}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant='h5' component='div'>
            {dynamic.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {dynamic.overview}
          </Typography>
        </CardContent>
      </Card> */}
    </>
  )
}
