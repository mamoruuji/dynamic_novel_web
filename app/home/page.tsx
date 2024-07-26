'use client'
import Link from 'next/link'
import { LoginButton } from '@/common/molecules'

export default function Page() {
  return (
    <>
      <LoginButton />
      <Link href='/'>Home</Link>
    </>
  )
}
