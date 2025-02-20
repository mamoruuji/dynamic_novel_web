'use client'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

export const DrawerHeader = styled('div')(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}))

export const DrawerHeaderWithIcon = ({ anchor, onClose }) => {
  const position = anchor === 'left' ? 'end' : 'start'
  const sx = { justifyContent: position }

  return (
    <DrawerHeader sx={sx}>
      <IconButton onClick={onClose}>
        {anchor === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </DrawerHeader>
  )
}
