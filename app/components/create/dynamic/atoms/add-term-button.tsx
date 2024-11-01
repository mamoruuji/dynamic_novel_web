import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

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
