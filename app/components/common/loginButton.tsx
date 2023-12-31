'use client'

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
        <button style={{ marginRight: 10 }} onClick={() => signOut()}>
          Sign out
        </button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button style={{ marginRight: 10 }} onClick={() => signIn()}>
        Sign in
      </button>
      <button style={{ marginRight: 10 }} onClick={() => signIn('google')}>
        Sign in with google
      </button>
      <button style={{ marginRight: 10 }} onClick={() => signIn('github')}>
        Sign in with github
      </button>
    </>
  )
}
