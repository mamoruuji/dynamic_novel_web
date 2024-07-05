'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

import { Alert, Box, CircularProgress } from '@mui/material'
import { Overview } from './components/organisms/'

import { dynamicAtom, chaptersAtom, termsAtom } from '@/states/search-request.ts'
import { useRecoilState } from 'recoil'

export default function Page() {
  const [dynamic, setDynamic] = useRecoilState(dynamicAtom)
  const [chapters, setChapters] = useRecoilState(chaptersAtom)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean | null>(false)
  const { dynamic_id } = useParams()
  const [dynamicTerms, setDynamicTerms] = useRecoilState(termsAtom('dynamic'))

  useEffect(() => {
    ;(async () => {
      try {
        const apiUrl = `/api/dynamic?dynamic_id=${dynamic_id}`
        const response = await fetch(apiUrl, {
          cache: 'no-store',
        })
        const data = await response.json()
        if (!data) {
          setError('作品がありません')
        } else {
          setDynamic(data)
          setChapters(data.chapters)
          setDynamicTerms(data.terms)
        }
      } catch (error) {
        console.error('API Routesの通信に失敗しました', error)
        setError('データの取得中にエラーが発生しました。')
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return <Overview />
}
