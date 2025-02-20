'use client'

import { Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const SearchStack = ({ children }) => {
  const theme = useTheme()
  return (
    <Stack
      sx={{
        gap: theme.spacing(2),
        py: theme.spacing(2),
        width: 300,
      }}
    >
      {children}
    </Stack>
  )
}
