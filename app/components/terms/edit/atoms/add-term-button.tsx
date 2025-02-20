import AddIcon from '@mui/icons-material/Add'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

export const AddTermButton = () => {
  return (
    <ListItemButton>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary={'用語追加'} />
    </ListItemButton>
  )
}
