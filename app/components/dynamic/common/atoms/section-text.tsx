import { Typography } from '@mui/material'
import { setFont } from 'src/libs/util'

export const SectionText = ({ children, size, font }) => {
  return (
    <Typography sx={{ fontSize: `${size}px` }} className={setFont(font)}>
      {children}
    </Typography>
  )
}
