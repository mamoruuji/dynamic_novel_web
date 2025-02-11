'use client'

import { useParams } from 'next/navigation'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import { chaptersAtom } from '@/states/operation-dynamic.ts'
import { dialogStateAtom, deleteTargetAtom } from '@/states/dialog-state.ts'
import { useAtom } from 'jotai'
import { poster } from 'src/libs/util'
import useSWRMutation from 'swr/mutation'
import { mutate } from 'swr'

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
