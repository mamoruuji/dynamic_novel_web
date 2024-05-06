'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

import { Alert, Box, CircularProgress, Typography } from '@mui/material'
import { SearchResults } from './components'
import { Section } from './components/molecules'

import { dynamicAtom, chaptersAtom } from '@/states/search-request.ts'
import { useRecoilState } from 'recoil'

export default function Page() {
  const imageWidth = '120'
  const imageHeight = '160'

  const [dynamic, setDynamic] = useRecoilState(dynamicAtom)
  const [chapters, setChapters] = useRecoilState(chaptersAtom)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean | null>(false)
  const { dynamic_id, page_id } = useParams()

  useEffect(() => {
    ;(async () => {
      try {
        const apiUrl = `/api/dynamic?dynamic_id=${dynamic_id}&page_id=${page_id}`
        const response = await fetch(apiUrl, {
          cache: 'no-store',
        })
        const data = await response.json()
        if (!data) {
          setError('作品がありません')
        } else {
          setDynamic(data)
          setChapters(data.chapters)
          console.dir(data)
        }
      } catch (error) {
        console.error('API Routesの通信に失敗しました', error)
        setError('データの取得中にエラーが発生しました。')
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return (
    <>
      <Section />
      <Link href='/'>Home</Link>
    </>
  )
}
