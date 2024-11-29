'use client'

import Link from 'next/link'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useParams } from 'next/navigation'

import ArrowRightIcon from '@mui/icons-material/ArrowRight'

export const ContentsPage = ({ page, chapterId }) => {
  const { dynamic_id } = useParams()
  return (
    <ListItemButton sx={{ pl: 4 }}>
      <ListItemIcon>
        <ArrowRightIcon />
      </ListItemIcon>
      <Link
        href={`/dynamic/read/${dynamic_id}/${chapterId}/${page.pageId}`}
        passHref
      >
        <ListItemText primary={page.title} />
      </Link>
    </ListItemButton>
  )
}
