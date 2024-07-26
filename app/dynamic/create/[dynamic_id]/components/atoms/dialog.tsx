
'use client'

import { useState } from 'react'

import {
  Box,
  Button,
  Dialog as MuiDialog,
  DialogTitle,
} from '@mui/material'

export const Dialog = ({children}) => {
  const [dialogOpen, setDialogOpen] = useState(false)

  return(
    <>
      <Button variant="outlined" onClick={() => setDialogOpen(true)}>
        クリックで画像を追加更新
      </Button>
      <MuiDialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
        <DialogTitle>Set backup account</DialogTitle>
        {children}
      </MuiDialog>
    </>
  )
}
