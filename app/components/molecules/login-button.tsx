'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material'

import {
  useSession,
  signIn,
  signOut
} from 'next-auth/react'

import {
  Dialog,
} from '@/common/atoms'
import auth from '@/auth'

export const LoginButton = () => {
  const { data: session, status } = useSession()
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget)
  const handleCloseUserMenu = () => setAnchorElUser(null)

  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  if (session) {
    return (
      <>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
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
            id="menu-appbar"
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
            <MenuItem key='user-page'>
              <Link href='/user'>
                <Typography textAlign="center">ユーザページへ</Typography>
              </Link>
            </MenuItem>
            {/* <MenuItem key='logout' onClick={() => signOut()}>
            </MenuItem> */}
          </Menu>
        </Box>
      </>
    )
  }
  return (
    <Dialog
      className="app"
      dialogTitle="ログイン方法を選択してください"
      buttonText="ログイン"
    >
      <Button style={{ marginRight: 10 }} onClick={() => signIn()}>
        Sign in
      </Button>
      <Button style={{ marginRight: 10 }} onClick={() => signIn('google')}>
        Sign in with google
      </Button>
      <Button style={{ marginRight: 10 }} onClick={() => signIn('github')}>
        Sign in with github
      </Button>
    </Dialog>
  )
}
