'use client'

import AddIcon from '@mui/icons-material/Add'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useParams } from 'next/navigation'
import { poster } from 'src/libs/util'
import { mutate } from 'swr'
import useSWRMutation from 'swr/mutation'

export const AddSectionButton = () => {
  const { chapter_id, dynamic_id, page_id } = useParams()
  const sectionUrl = `/api/dynamic/${dynamic_id}?dummySection`
  const createUrl = `/api/section/create`
  const { isMutating, trigger } = useSWRMutation(createUrl, poster, {
    onSuccess: (newData) => {
      mutate(sectionUrl)
    },
  })

  const handleClick = () => {
    trigger({
      chapter_id: chapter_id,
      dynamic_id: dynamic_id,
      page_id: page_id,
    })
  }

  return (
    <ListItemButton sx={{ pl: 4 }} onClick={handleClick} disabled={isMutating}>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary={'セクション追加'} />
    </ListItemButton>
  )
}
