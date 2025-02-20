import { Typography } from '@mui/material'
import {
  cuteFont,
  gagFont,
  horrorFont,
  lineFont,
  monologueFont,
  weakFont,
} from 'public/fonts/fonts.ts'

export const Text = ({ children, font }) => {
  const setFont = (font) => {
    switch (font) {
      case 'lineFont':
        return lineFont.className
        break
      case 'monologueFont':
        return monologueFont.className
        break
      case 'gagFont':
        return gagFont.className
        break
      case 'horrorFont':
        return horrorFont.className
        break
      case 'weakFont':
        return weakFont.className
        break
      case 'cuteFont':
        return cuteFont.className
        break
    }
  }

  return <Typography className={setFont(font)}>{children}</Typography>
}
