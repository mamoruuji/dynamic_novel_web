"use client"

import { useSession, signIn, signOut } from "next-auth/react"
export default function LoginButton() {

  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <img
          src={session.user.image}
          alt="icon"
          style={{ width: "100px", height: "100px" }}
        />
        <button style={{marginRight: 10}} onClick={() => signOut()}>
          Sign out
        </button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button style={{marginRight: 10}} onClick={() => signIn()}>
        Sign in
      </button>
    </>
  )
}
