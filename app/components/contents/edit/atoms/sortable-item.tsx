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

import { chaptersAtom, editTextAtom } from '@/states/operation-dynamic.ts'
import { useAtom } from 'jotai'
import { EditText } from '@/components/contents/edit/atoms'

type SortableItemProps = {
  id: string
  name: string
  onEdit: (newText: string) => void
  onDelete: React.ReactNode
  pageLink?: React.ReactNode
}

export const SortableItem = ({
  id,
  name,
  onEdit,
  onDelete,
  pageLink,
}: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const [isEditing, setIsEditing] = useAtom(editTextAtom(id))

  const handleEditClick = () => {
    setIsEditing(true)
  }

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
              <EditText id={id} text={name} onTextChange={onEdit} />
            </ListItemText>
          </ListItemButton>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {typeof pageLink !== 'undefined' && (
            <IconButton>{pageLink}</IconButton>
          )}
          <IconButton>
            <EditIcon onClick={handleEditClick} />
          </IconButton>
          <IconButton>
            <DragIndicatorIcon {...listeners} />
          </IconButton>
          {onDelete}
        </Box>
      </Box>
    </ListItem>
  )
}
