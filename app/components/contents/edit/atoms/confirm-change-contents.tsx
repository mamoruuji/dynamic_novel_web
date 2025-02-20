'use client'

import { ListItemButton, ListItemText } from '@mui/material'
import { useAtomValue } from 'jotai'
import { useParams } from 'next/navigation'
import { poster } from 'src/libs/util'
import useSWRMutation from 'swr/mutation'

import { chaptersAtom } from '@/states/operation-dynamic.ts'

export const ConfirmChangeContents = () => {
  const chapters = useAtomValue(chaptersAtom)

  const { dynamic_id } = useParams()
  const contentsUrl = `/api/dynamic/${dynamic_id}/contents`
  const { trigger } = useSWRMutation(contentsUrl, poster)

  const handleClick = () => {
    trigger({ chapters: chapters })
  }

  return (
    <ListItemButton sx={{ pl: 4 }} onClick={handleClick}>
      <ListItemText>目次の変更確定</ListItemText>
    </ListItemButton>
  )
}
