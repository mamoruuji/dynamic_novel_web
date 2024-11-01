'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import BookmarksIcon from '@mui/icons-material/Bookmarks'
import PersonIcon from '@mui/icons-material/Person'

export const UserLinks = () => {
  const { data: session } = useSession()
  const userPages = [
    {icon: <AutoStoriesIcon />, text: '作成した作品', url: 'search' },
    {icon: <BookmarksIcon />, text: 'ブックマーク', url: 'bookmarks'},
    {icon: <PersonIcon />, text: 'フォローユーザ', url: 'follows'},
  ]

  return (
      <List>
        {userPages.map((page, index) => (
          <ListItem key={index} disablePadding>
            <Link href={`/user/${session?.user?.id}/${page.url}`} passHref>
              <ListItemButton>
                <ListItemIcon>
                  {page.icon}
                </ListItemIcon>
                <ListItemText primary={page.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
  )
}
