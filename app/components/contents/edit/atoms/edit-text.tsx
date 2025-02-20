'use client'

import { TextField, Typography } from '@mui/material'
import { useAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { useRef,useState } from 'react'
import { poster } from 'src/libs/util'
import { mutate } from 'swr'
import useSWRMutation from 'swr/mutation'

import { editTextAtom } from '@/states/operation-dynamic.ts'

export const EditText = ({ id, name }) => {
  const [isEditing, setIsEditing] = useAtom(editTextAtom(id))
  const formRef = useRef(null)
  const [localText, setLocalText] = useState(name)

  const [type, typeId] = id.split(':')
  const argId = `${type}_id`

  const { dynamic_id } = useParams()
  const contentsUrl = `/api/dynamic/${dynamic_id}?dummyContents`

  const updateUrl = `/api/${type}/update`
  const { isMutating, trigger } = useSWRMutation(updateUrl, poster, {
    onSuccess: (newData) => {
      mutate(contentsUrl)
    },
  })

  const handleChange = (event) => {
    setLocalText(event.target.value)
  }

  const handleBlur = () => {
    setIsEditing(false)
    trigger({ [argId]: typeId, name: localText })
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false)
      trigger({ [argId]: typeId, name: localText })
    }
  }

  return (
    <>
      {isEditing ? (
        <form ref={formRef}>
          <TextField
            name='edit-text'
            value={localText}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            variant='outlined'
            size='small'
            disabled={isMutating}
          />
        </form>
      ) : (
        <Typography style={{ cursor: 'pointer' }}>{name}</Typography>
      )}
    </>
  )
}
