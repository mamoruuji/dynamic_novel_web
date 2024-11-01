import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export const AddChapterButton = () => {
  return (
    <ListItemButton>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary={'章追加'} />
    </ListItemButton>
  )
}
