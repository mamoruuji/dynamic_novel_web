'use client'

import { useParams } from 'next/navigation'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useAtomValue } from 'jotai'
import { chaptersAtom } from '@/states/operation-dynamic.ts'
import { poster } from 'src/libs/util'
import useSWRMutation from 'swr/mutation'
import useSWR from 'swr'

export const ConfirmChangeContents = () => {
  const chapters = useAtomValue(chaptersAtom)

  const { dynamic_id } = useParams()
  // const dynamicUrl = `/api/dynamic/${dynamic_id}?dummyConfirm`
  // const { mutate } = useSWR(dynamicUrl)
  const contentsUrl = `/api/dynamic/${dynamic_id}/contents`
  const { trigger } = useSWRMutation(contentsUrl, poster)
  // const { trigger } = useSWRMutation(contentsUrl, poster, {
  //   onSuccess: (newData) => {
  //     mutate(newData, false)
  //   },
  // })

  const handleClick = () => {
    trigger({ chapters: chapters })
  }

  return (
    <ListItemButton sx={{ pl: 4 }} onClick={handleClick}>
      <ListItemText>目次の変更確定</ListItemText>
    </ListItemButton>
  )
}
