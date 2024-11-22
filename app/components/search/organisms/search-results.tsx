import Link from 'next/link'

import { dynamicsAtom } from '@/states/search-request.ts'
import { useRecoilValue } from 'recoil'

import { Card, CardContent, CardMedia, Typography } from '@mui/material'

export const SearchResults = () => {
  const dynamics = useRecoilValue(dynamicsAtom)

  return (
    <>
      {dynamics.map((dynamic) => (
        <Card key={dynamic.dynamicId} sx={{ display: 'flex', marginBottom: 2 }}>
          <CardMedia
            component='img'
            sx={{ width: 120, objectFit: 'cover' }}
            image={'/images/cover.jpg'}
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
        </Card>
      ))}
    </>
  )
}
