'use client'

import React, { useEffect, useState } from 'react'
import { createTheme, ThemeProvider, PaletteMode } from '@mui/material'
import { usePaletteMode } from 'app/states/palette-mode.ts'

export const ThemeContainer = ({ children }) => {
  const [paletteMode, setPaletteMode] = usePaletteMode()
  const [isDarkMode, setIsDarkMode] = useState(paletteMode === 'dark')

  const theme = createTheme({
    palette: {
      mode: paletteMode,
    },
  })

  useEffect(() => {
    setIsDarkMode(paletteMode === 'dark')
  })

  const handleChangePaletteMode = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const paletteMode = event.target.checked ? 'dark' : 'light'
    setPaletteMode(paletteMode)
    setIsDarkMode(event.target.checked)
  }

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      // primary: {
      //   main: 'hsl(199,92%,74%)', // ライトサックスブル
      //   light: 'hsl(199,92%,74%)',
      //   dark: 'hsl(0,2%,16%)',
      // },
      // secondary: {
      //   main: 'hsl(198,16%,84%)', // アイスグリーン
      //   light: 'hsl(198,16%,84%)',
      //   dark: 'hsl(0,2%,16%)',
      // },
      // background: {
      //   paper: 'hsl(110,23%,94%)', // 白
      // },
    },
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
