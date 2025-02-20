'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import EditIcon from '@mui/icons-material/Edit'
import LoginIcon from '@mui/icons-material/Login'
import {
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { useAtom } from 'jotai'

import { ConfirmDeleteIcon, EditText } from '@/components/contents/edit/atoms'
import { editTextAtom } from '@/states/operation-dynamic.ts'

type SortableItemProps = {
  id: string
  name: string
  href?: string
}

export const SortableItem = ({ id, name, href }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const [isEditing, setIsEditing] = useAtom(editTextAtom(id))

  const handleEditClick = () => setIsEditing(true)

  const [type, typeId] = id.split(':')

  return (
    <ListItem ref={setNodeRef} style={style} {...attributes}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'inline-block',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <ListItemButton>
            <ListItemText>
              <EditText id={id} name={name} />
            </ListItemText>
          </ListItemButton>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {type === 'page' && (
            <IconButton component='a' href={href}>
              <LoginIcon />
            </IconButton>
          )}
          <IconButton>
            <EditIcon onClick={handleEditClick} />
          </IconButton>
          <IconButton>
            <DragIndicatorIcon {...listeners} />
          </IconButton>
          <IconButton>
            <ConfirmDeleteIcon id={id} name={name} />
          </IconButton>
        </Box>
      </Box>
    </ListItem>
  )
}
