import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material'

import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CloseIcon from '@mui/icons-material/Close'

export const PageContentRead = ({ page }) => {
  // const daletePageHandle = () => {}

  return (
    <ListItemButton sx={{ pl: 4 }}>
      <ListItemIcon>
        <ArrowRightIcon />
      </ListItemIcon>
      <ListItemText primary={page.title} />
      {/* <IconButton onClick={deletePageHandle}> */}
      <IconButton>
        <CloseIcon />
      </IconButton>
    </ListItemButton>
  )
}
