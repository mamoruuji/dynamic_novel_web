'use client'

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

export const ConfirmDeleteDialog = () => {
  const [chapters, setChapters] = useAtom(chaptersAtom)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useAtom(dialogStateAtom)
  const [deleteTarget, setDeleteTarget] = useAtom(deleteTargetAtom)

  const handleCloseDeleteDialog = () => {
    setDeleteTarget(null)
    setIsDeleteDialogOpen(false)
  }

  const handleDeleteChapter = (chapterId: number) => {
    setChapters(chapters.filter((chapter) => chapter.chapterId !== chapterId))
    setIsDeleteDialogOpen(false)
  }

  const handleDeletePage = (chapterId: number, pageId: number) => {
    setChapters(
      chapters.map((chapter) =>
        chapter.chapterId === chapterId
          ? {
              ...chapter,
              pages: (chapter.pages ?? []).filter(
                (page) => page.pageId !== pageId,
              ),
            }
          : chapter,
      ),
    )
    setIsDeleteDialogOpen(false)
  }

  return (
    <Dialog open={isDeleteDialogOpen} onClose={handleCloseDeleteDialog}>
      <DialogTitle>警告</DialogTitle>
      <DialogContent>
        削除対象に指定しますか？
        左サイドバー最下部にある「変更確定ボタン」をクリックすると削除されます。
        中の内容のデータごと消えます。 戻すことは出来ません。{' '}
        {deleteTarget?.type === 'chapter' ? '章：' : 'ページ：'}
        {deleteTarget?.name}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDeleteDialog}>キャンセル</Button>
        <Button
          color='secondary'
          onClick={() => {
            if (deleteTarget?.type === 'chapter') {
              handleDeleteChapter(deleteTarget.chapterId)
            } else if (deleteTarget?.type === 'page') {
              handleDeletePage(deleteTarget.chapterId, deleteTarget.pageId)
            }
          }}
        >
          確認
        </Button>
      </DialogActions>
    </Dialog>
  )
}
