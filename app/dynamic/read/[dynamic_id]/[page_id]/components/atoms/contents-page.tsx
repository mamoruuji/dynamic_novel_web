'use client'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import ArrowRightIcon from '@mui/icons-material/ArrowRight'

export const ContentsPage = ({ page }) => {
  return (
    <ListItemButton sx={{ pl: 4 }}>
      <ListItemIcon>
        <ArrowRightIcon />
      </ListItemIcon>
      <ListItemText primary={page.title} />
    </ListItemButton>
  )
}
