'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

import { Sections } from '@/components/create/page/organisms'

import { dynamicAtom, chaptersAtom } from '@/states/operation-dynamic.ts'
import { useAtom } from 'jotai'

export default function Page() {
  const [dynamic, setDynamic] = useAtom(dynamicAtom)
  const [chapters, setChapters] = useAtom(chaptersAtom)
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
        }
      } catch (error) {
        console.error('API Routesの通信に失敗しました', error)
        setError('データの取得中にエラーが発生しました。')
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  // if (error)
  //   return (
  //     <Alert severity='warning' onClose={() => setError(null)}>
  //       {error}
  //     </Alert>
  //   )
  // if (isLoading) return <CircularProgress />

  // return (
  //   <>
  //     <Box>{dynamic.dynamic_id}</Box>
  //   </>
  // )
  return <Sections />
}
