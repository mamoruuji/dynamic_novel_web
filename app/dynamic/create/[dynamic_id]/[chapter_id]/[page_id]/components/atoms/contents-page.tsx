'use client'
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material'

import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import CloseIcon from '@mui/icons-material/Close'

export const ContentsPage = ({ page }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: page.pageId })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  // const daletePageHandle = () => {}

  return (
    <ListItemButton
      sx={{ pl: 4 }}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
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
