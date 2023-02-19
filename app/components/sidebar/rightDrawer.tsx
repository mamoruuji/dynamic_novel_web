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
import { rightDrawerStateAtom } from "app/states/drawerState"
import { useRecoilState } from "recoil"

const RightDrawer = () => {
  const theme = useTheme()
  const [ rightOpen, setRightOpen] = useRecoilState(rightDrawerStateAtom)

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
        anchor="right"
        open={rightOpen}
      >
        <DrawerHeader className="justify-start">
          <IconButton onClick={ () => setRightOpen(false) }>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
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
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
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

export default RightDrawer
