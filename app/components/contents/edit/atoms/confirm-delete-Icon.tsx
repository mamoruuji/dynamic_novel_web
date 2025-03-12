'use client'

import CloseIcon from '@mui/icons-material/Close'
import { useAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { poster } from 'src/libs/util'
import { mutate } from 'swr'
import useSWRMutation from 'swr/mutation'

import {
  deleteTargetAtom,
  deleteDialogStateAtom,
} from '@/states/dialog-state.ts'

export const ConfirmDeleteIcon = ({ id, name }) => {
  const [deleteTarget, setDeleteTarget] = useAtom(deleteTargetAtom)
  const [deleteDialogOpen, setDeleteDialogOpen] = useAtom(deleteDialogStateAtom)

  const [type, typeId] = id.split(':')
  const argId = `${type}_id`

  const { dynamic_id } = useParams()
  const contentsUrl = `/api/dynamic/${dynamic_id}?dummyContents`
  const deleteUrl = `/api/${type}/delete`
  const { isMutating, trigger } = useSWRMutation(deleteUrl, poster, {
    onSuccess: (data) => {
      mutate(contentsUrl)
    },
  })

  const handleOpenDeleteDialog = (target) => {
    setDeleteTarget(target)
    setDeleteDialogOpen(true)
  }

  return (
    <CloseIcon
      color='secondary'
      onClick={() =>
        handleOpenDeleteDialog({
          name: name,
          arg: { [argId]: typeId },
          trigger: async (arg) => await trigger(arg),
          type: type,
        })
      }
      disabled={isMutating}
    />
  )
}
