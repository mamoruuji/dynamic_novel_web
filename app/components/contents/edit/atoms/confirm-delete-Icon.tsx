'use client'

import { useParams } from 'next/navigation'
import CloseIcon from '@mui/icons-material/Close'
import { dialogStateAtom, deleteTargetAtom } from '@/states/dialog-state.ts'
import { useAtom } from 'jotai'

import { mutate } from 'swr'
import useSWRMutation from 'swr/mutation'
import { poster } from 'src/libs/util'

export const ConfirmDeleteIcon = ({ id, name }) => {
  const [deleteTarget, setDeleteTarget] = useAtom(deleteTargetAtom)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useAtom(dialogStateAtom)

  const [type, typeId] = id.split(':')
  const argId = `${type}_id`

  const { dynamic_id } = useParams()
  const contentsUrl = `/api/dynamic/${dynamic_id}?dummyContents`
  const deleteUrl = `/api/${type}/delete`
  const { trigger, isMutating } = useSWRMutation(deleteUrl, poster, {
    onSuccess: (data) => {
      mutate(contentsUrl)
    },
  })

  const handleOpenDeleteDialog = (target) => {
    setDeleteTarget(target)
    setIsDeleteDialogOpen(true)
  }

  return (
    <CloseIcon
      color='secondary'
      onClick={() =>
        handleOpenDeleteDialog({
          type: type,
          name: name,
          trigger: async (arg) => await trigger(arg),
          arg: { [argId]: typeId },
        })
      }
      disabled={isMutating}
    />
  )
}
