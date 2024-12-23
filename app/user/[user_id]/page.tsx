'use client'

import { useParams } from 'next/navigation'

import { Alert, CircularProgress } from '@mui/material'
import { UserDetail } from '@/components/user/organisms'
import { UserLinks } from '@/components/user/molecules'

import useSWR from 'swr'

import { isEmptyObject } from 'src/libs/util'

export default function Page() {
  const { user_id } = useParams()
  const url = `/api/user/${user_id}`
  const { data, error, isLoading } = useSWR(url)

  if (error) return <Alert severity='warning'>{error}</Alert>
  if (isLoading) return <CircularProgress />
  if (isEmptyObject(data)) return <Typography>No data</Typography>

  return (
    <>
      <UserDetail />
      <UserLinks />
    </>
  )
}
