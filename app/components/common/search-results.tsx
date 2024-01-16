import Image from 'next/image'

import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'

export const SearchResults = ({ results }) => {
  return (
    <div>
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
    </div>
  )
}
