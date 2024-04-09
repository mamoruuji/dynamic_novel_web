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

export const DrawerHeaderWithIcon = ({ onClose }) => {
  const theme = useTheme()

  return (
    <DrawerHeader className='justify-end'>
      <IconButton onClick={onClose}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </DrawerHeader>
  )
}
