'use client'

import { styled } from '@mui/material/styles'
import { IconButton, useTheme } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

export const DrawerHeaderWithIcon = ({ onClose, anchor }) => {
  const position = (anchor === 'left') ? 'end' : 'start'
  const sx = { justifyContent: position }

  return (
    <DrawerHeader sx={sx}>
      <IconButton onClick={onClose}>
        {anchor === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </DrawerHeader>
  )
}
