'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

import { Alert, Box, CircularProgress, Typography } from '@mui/material'
import { Overview } from '@/components/read/dynamic/organisms'

import {
  dynamicAtom,
  chaptersAtom,
  termsAtom,
} from '@/states/operation-dynamic.ts'
import { useAtom } from 'jotai'

import useSWR from 'swr'

export default function Page() {
  const [dynamic, setDynamic] = useAtom(dynamicAtom)
  const [chapters, setChapters] = useAtom(chaptersAtom)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean | null>(false)
  const { dynamic_id } = useParams()

  const [dynamicTerms, setDynamicTerms] = useAtom(termsAtom('dynamic'))

  const url = '/api/tag'
  // const { data, error, isLoading } = useSWR(url)
  const { data } = useSWR(url)

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
