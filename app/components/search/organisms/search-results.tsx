'use client'

import useSWR from 'swr'
import { useParams } from 'next/navigation'
import {
  Alert,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from '@mui/material'

export const SearchResults = () => {
  const { user_id } = useParams()
  const url = `/api/search/${user_id}`
  const { data, error, isLoading } = useSWR(url)

  const isEmptyObject = (obj: object): boolean => {
    return Object.keys(obj).length === 0
  }

  if (error) return <Alert severity='warning'>{error}</Alert>
  if (isLoading) return <CircularProgress />
  if (isEmptyObject(data)) return <Typography>No data</Typography>
  return (
    <>
      {data.dynamics.map((dynamic) => (
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
