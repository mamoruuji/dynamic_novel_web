'use client'

import { Alert, CircularProgress, Typography } from '@mui/material'
import { useParams } from 'next/navigation'
import { isEmptyObject } from 'src/libs/util'
import useSWR from 'swr'

import { UserLinks } from '@/components/user/molecules'
import { UserDetail } from '@/components/user/organisms'

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
