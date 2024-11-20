'use client'

import { useRecoilState } from 'recoil'
import { dialogStateAtom } from '@/states/dialog-state.ts'

import { Box, Button, Dialog as MuiDialog } from '@mui/material'

export const Dialog = ({ children, buttonText }) => {
  const [dialogOpen, setDialogOpen] = useRecoilState(dialogStateAtom)

  return (
    <>
      <Button variant='outlined' onClick={() => setDialogOpen(true)}>
        {buttonText}
      </Button>
      <MuiDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth='sm'
      >
        {children}
      </MuiDialog>
    </>
  )
}
