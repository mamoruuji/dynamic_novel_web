'use client'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import EditIcon from '@mui/icons-material/Edit'
import LoginIcon from '@mui/icons-material/Login'

import { chaptersAtom, editTextAtom } from '@/states/operation-dynamic.ts'
import { useAtom } from 'jotai'
import { ConfirmDeleteIcon, EditText } from '@/components/contents/edit/atoms'

import CloseIcon from '@mui/icons-material/Close'
import { dialogStateAtom, deleteTargetAtom } from '@/states/dialog-state.ts'

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
          display: 'inline-block',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
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
