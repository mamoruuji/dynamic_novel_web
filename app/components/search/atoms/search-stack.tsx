'use client'

import { Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const SearchStack = ({ children }) => {
  const theme = useTheme()
  return (
    <Stack
      sx={{
        width: 300,
        py: theme.spacing(2),
        gap: theme.spacing(2)
      }}
    >
      {children}
    </Stack>
  )
}
