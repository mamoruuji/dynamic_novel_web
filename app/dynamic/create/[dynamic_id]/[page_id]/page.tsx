'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

import { Alert } from '@mui/material'
import { Spinner } from '@/common/atoms'
import { SearchResults } from './components'
import { Box } from '@mui/material'

import { dynamicAtom } from '@/states/search-request.ts'
import { useRecoilState } from 'recoil'

export default function Page() {
  const [dynamic, setDynamic] = useRecoilState(dynamicAtom)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean | null>(false)
  const { dynamic_id, page_id } = useParams()

  useEffect(() => {
    ;(async () => {
      try {
        const apiUrl = `/api/contents?dynamic_id=${dynamic_id}&page_id=${page_id}`
        const response = await fetch(apiUrl, {
          cache: 'no-store',
        })
        const data = await response.json()
        if (!data) {
          setError('作品がありません')
        } else {
          setDynamic(data)
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
  if (isLoading) return <Spinner />

  return (
    <>
      <Box>{dynamic.dynamic_id}</Box>
    </>
  )
}
