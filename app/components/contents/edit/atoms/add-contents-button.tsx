'use client'

import AddIcon from '@mui/icons-material/Add'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { poster } from 'src/libs/util'
import { mutate } from 'swr'
import useSWRMutation from 'swr/mutation'

import { chaptersAtom } from '@/states/operation-dynamic.ts'

export const AddContentsButton = ({ id, type }) => {
  const [chapters, setChapters] = useAtom(chaptersAtom)

  const { dynamic_id } = useParams()
  const contentsUrl = `/api/dynamic/${dynamic_id}?dummyContents`
  const createUrl = `/api/${type}/create`
  const { isMutating, trigger } = useSWRMutation(createUrl, poster, {
    onSuccess: (newData) => {
      mutate(contentsUrl)
    },
  })

  const argId = type === 'chapter' ? 'dynamic_id' : 'chapter_id'
  const text = type === 'chapter' ? '章追加' : 'ページ追加'

  const handleClick = () => {
    trigger({
      [argId]: id,
    })
  }

  return (
    <ListItemButton sx={{ pl: 4 }} onClick={handleClick} disabled={isMutating}>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  )
}
