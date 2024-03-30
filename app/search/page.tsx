'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { Alert } from '@mui/material'
import { Spinner } from '@/common/atoms'
import { SearchResults } from './components'

import { dynamicsAtom } from '@/states/search-request.ts'

import {
  searchKeywordsAtom,
  sortCategoryAtom,
  sortOrderAtom,
  filterKeywordsAtom,
  filterStartDateAtom,
  filterEndDateAtom,
} from '@/states/search-request.ts'

export default function Page() {
  const [dynamics, setDynamics] = useRecoilState(dynamicsAtom)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean | null>(false)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('/api/dynamic', {
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
  if (isLoading) return <Spinner />
  return <SearchResults />
}
