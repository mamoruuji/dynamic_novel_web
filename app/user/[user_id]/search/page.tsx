'use client'

import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { useParams } from 'next/navigation'

import { Alert, CircularProgress } from '@mui/material'
import { SearchResults } from '@/components/search/organisms'

import { dynamicsAtom } from '@/states/search-request.ts'

export default function Page() {
  const [dynamics, setDynamics] = useRecoilState(dynamicsAtom)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean | null>(false)
  const { user_id } = useParams()

  useEffect(() => {
    ;(async () => {
      try {
        const apiUrl = `/api/search?user_id=${user_id}`
        const response = await fetch(apiUrl, {
          cache: 'no-store',
        })
        const data = await response.json()
        if (!data.dynamics || data.dynamics.length === 0) {
          setError('指定された検索条件でヒットしませんでした。')
        } else {
          setDynamics(data.dynamics)
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
  return <SearchResults />
}
