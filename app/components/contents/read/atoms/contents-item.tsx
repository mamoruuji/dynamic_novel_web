import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'

type ContentsItemProps = {
  id: string
  name: string
  pageLink?: React.ReactNode
}

export const ContentsItem = ({ id, name, pageLink }: SortableItemProps) => {
  console.dir(pageLink)
  return (
    <ListItem>
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
              {typeof pageLink !== 'undefined' ? pageLink : name}
            </ListItemText>
          </ListItemButton>
        </Box>
      </Box>
    </ListItem>
  )
}
