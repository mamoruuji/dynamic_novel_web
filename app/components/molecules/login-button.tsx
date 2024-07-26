'use client'

import { Button } from '@mui/material'
import { useSession, signIn, signOut } from 'next-auth/react'
export const LoginButton = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <img
          src={session.user.image}
          alt='icon'
          style={{ width: '100px', height: '100px' }}
        />
        <Button style={{ marginRight: 10 }} onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <Button style={{ marginRight: 10 }} onClick={() => signIn()}>
        Sign in
      </Button>
      <Button style={{ marginRight: 10 }} onClick={() => signIn('google')}>
        Sign in with google
      </Button>
      <Buttoh style={{ marginRight: 10 }} onClick={() => signIn('github')}>
        Sign in with github
      </Button>
    </>
  )
}
