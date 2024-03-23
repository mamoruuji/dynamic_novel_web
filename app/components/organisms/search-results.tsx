'use client'
import Image from 'next/image'

import { Box, Card, CardContent, Typography, CardMedia } from '@mui/material'

export const SearchResults = ({ results }) => {
  return (
    <Box>
      {results.map((result) => (
        <Card key={result.id} sx={{ display: 'flex', marginBottom: 2 }}>
          <CardMedia
            component='img'
            sx={{ width: 120, objectFit: 'cover' }}
            image={result.imageUrl}
            alt={result.title}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography variant='h5' component='div'>
              {result.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {result.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}
