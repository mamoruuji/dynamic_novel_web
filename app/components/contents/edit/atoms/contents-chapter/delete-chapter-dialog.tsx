'use client'

import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { chaptersAtom } from '@/states/operation-dynamic.ts'
import { dialogStateAtom, deleteTargetAtom } from '@/states/dialog-state.ts'
import { useAtom } from 'jotai'

export const DeleteChapterDialog = ({ name, chapterId }) => {
  const [deleteTarget, setDeleteTarget] = useAtom(deleteTargetAtom)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useAtom(dialogStateAtom)

  const handleOpenDeleteDialog = (target) => {
    setDeleteTarget(target)
    setIsDeleteDialogOpen(true)
  }

  return (
    <IconButton
      color='secondary'
      onClick={() =>
        handleOpenDeleteDialog({
          type: 'chapter',
          name: name,
          chapterId: chapterId,
        })
      }
    >
      <CloseIcon />
    </IconButton>
  )
}
