'use client'

import { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material'

import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export const LoginButton = () => {
  const { data: session, status } = useSession()
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorElUser(event.currentTarget)
  const handleCloseUserMenu = () => setAnchorElUser(null)
  const router = useRouter()

  const handleLinkUserPage = () => {
    if (session?.user?.id) {
      router.push(`/user/${session.user.id}`)
    }
  }

  if (session) {
    return (
      <>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title='Open settings'>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar
                src={session.user?.image ?? ``}
                alt='icon'
                style={{ borderRadius: '20px' }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem key='user-page' onClick={handleLinkUserPage}>
              <Typography textAlign='center'>ユーザページへ</Typography>
            </MenuItem>
            <MenuItem key='logout' onClick={() => signOut()}>
              <Typography textAlign='center'>ログアウト</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </>
    )
  }
  return (
    <>
      <Button variant='contained' color='primary' onClick={() => signIn()}>
        サインイン
      </Button>
    </>
  )
}
