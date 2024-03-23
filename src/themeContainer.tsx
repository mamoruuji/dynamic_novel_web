'use client'

import { useEffect, useState } from 'react'
import {
  createTheme,
  ThemeProvider,
  PaletteMode,
  useMediaQuery,
} from '@mui/material'

export const ThemeContainer = ({ children }) => {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light'

  const theme = createTheme({
    palette: {
      mode: isDarkMode,
    },
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
