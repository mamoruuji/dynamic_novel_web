import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export const AddPageButton = () => {
  return (
    <ListItemButton sx={{ pl: 4 }}>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary={'ページ追加'} />
    </ListItemButton>
  )
}
