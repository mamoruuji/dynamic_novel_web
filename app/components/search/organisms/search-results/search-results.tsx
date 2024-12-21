'use client'

import useSWR from 'swr'
import { useParams } from 'next/navigation'
import {
  Alert,
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from '@mui/material'
import { TagDisplay } from '@/components/common/atoms'
import { isEmptyObject } from 'src/libs/util'
import styles from './search-results.module.sass'

export const SearchResults = () => {
  const { user_id } = useParams()
  const url = `/api/search/${user_id}`
  const { data, error, isLoading } = useSWR(url)

  if (error) return <Alert severity='warning'>{error}</Alert>
  if (isLoading) return <CircularProgress />
  if (isEmptyObject(data)) return <Typography>No data</Typography>
  return (
    <>
      {data.dynamics.map((dynamic) => (
        <Card key={dynamic.dynamicId} className={styles.dynamic}>
          <CardMedia
            component='img'
            sx={{ width: 120, objectFit: 'cover' }}
            image={'/images/cover.jpg'}
            alt={dynamic.title}
          />
          <CardContent sx={{ flex: 1 }}>
            <Box>
              <Typography variant='h5' component='div'>
                {dynamic.title}
              </Typography>
            </Box>
            <Box>
              <TagDisplay tags={dynamic.tags} />
            </Box>
            <Box>
              <Typography variant='body2' color='text.secondary'>
                {dynamic.overview}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
