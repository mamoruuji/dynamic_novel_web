'use client'

import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useParams } from 'next/navigation'

import { Alert, CircularProgress } from '@mui/material'
import { UserDetail } from '@/components/user/organisms'
import { UserLinks } from '@/components/user/molecules'

import { userAtom } from '@/states/operation-user.ts'

export default function Page() {
  const [user, setUser] = useRecoilState(userAtom)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean | null>(false)
  const { user_id } = useParams()

  useEffect(() => {
    ;(async () => {
      try {
        const apiUrl = `/api/user?user_id=${user_id}`
        const response = await fetch(apiUrl, {
          cache: 'no-store',
        })
        const data = await response.json()
        if (!data || data.length === 0) {
          setError('ユーザデータが見つかりません。')
        } else {
          setUser(data)
        }
      } catch (error) {
        console.error('API Routesの通信に失敗しました', error)
        setError('データの取得中にエラーが発生しました。')
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  if (error)
    return (
      <Alert severity='warning' onClose={() => setError(null)}>
        {error}
      </Alert>
    )
  if (isLoading) return <CircularProgress />
  return (
    <>
      <UserDetail />
      <UserLinks />
    </>
  )
}

