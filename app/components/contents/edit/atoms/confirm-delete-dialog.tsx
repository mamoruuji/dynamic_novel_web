'use client'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { useAtom } from 'jotai'

import { deleteTargetAtom,dialogStateAtom } from '@/states/dialog-state.ts'
import { chaptersAtom } from '@/states/operation-dynamic.ts'

export const ConfirmDeleteDialog = () => {
  const [chapters, setChapters] = useAtom(chaptersAtom)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useAtom(dialogStateAtom)
  const [deleteTarget, setDeleteTarget] = useAtom(deleteTargetAtom)

  const handleCloseDeleteDialog = () => {
    setDeleteTarget(null)
    setIsDeleteDialogOpen(false)
  }

  const handleDelete = async () => {
    await deleteTarget.trigger(deleteTarget.arg)
    setIsDeleteDialogOpen(false)
  }

  return (
    <Dialog open={isDeleteDialogOpen} onClose={handleCloseDeleteDialog}>
      <DialogTitle>警告</DialogTitle>
      <DialogContent>
        削除しますか？ 中のデータごと消えます。 戻すことは出来ません。{' '}
        {deleteTarget?.type === 'chapter' ? '章：' : 'ページ：'}
        {deleteTarget?.name}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDeleteDialog}>キャンセル</Button>
        <Button color='secondary' onClick={() => handleDelete()}>
          確認
        </Button>
      </DialogActions>
    </Dialog>
  )
}
