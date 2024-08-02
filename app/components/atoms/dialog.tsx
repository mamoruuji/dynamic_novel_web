
'use client'

import { useState } from 'react'

import {
  Box,
  Button,
  Dialog as MuiDialog,
  DialogTitle,
} from '@mui/material'

export const Dialog = ({ children, dialogTitle, buttonText }) => {
  const [dialogOpen, setDialogOpen] = useState(false)

  return(
    <>
      <Button variant="outlined" onClick={() => setDialogOpen(true)}>
        {buttonText}
      </Button>
      <MuiDialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        {children}
      </MuiDialog>
    </>
  )
}
