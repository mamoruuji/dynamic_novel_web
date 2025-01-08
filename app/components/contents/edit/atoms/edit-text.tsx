import { useState, useRef } from 'react'
import { TextField, Typography } from '@mui/material'

import { editTextAtom } from '@/states/operation-dynamic.ts'
import { useAtom } from 'jotai'

export const EditText = ({ id, text, onTextChange }) => {
  const [isEditing, setIsEditing] = useAtom(editTextAtom(id))
  const formRef = useRef(null)
  const [localText, setLocalText] = useState(text)

  const handleChange = (event) => {
    setLocalText(event.target.value)
  }

  const handleBlur = () => {
    setIsEditing(false)
    onTextChange(localText)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false)
      onTextChange(localText)
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
          />
        </form>
      ) : (
        <Typography style={{ cursor: 'pointer' }}>{text}</Typography>
      )}
    </>
  )
}
