"use client"

import * as React from 'react'
import useTheme from '@mui/material/styles/useTheme'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

import DrawerHeader from '../sidebar/drawerHeader'
import { leftDrawerStateAtom } from "app/states/drawerState"
import { useRecoilState } from "recoil"

const LeftDrawer = () => {
  const theme = useTheme()
  const [ leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)

  return (
      <Drawer
        sx={{
          width: process.env.drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: process.env.drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={leftOpen}
      >
        <DrawerHeader className="justify-end">
          <IconButton onClick={ () => setLeftOpen(false) }>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
  )
}

export default LeftDrawer