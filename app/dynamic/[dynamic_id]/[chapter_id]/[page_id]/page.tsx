'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

import { Sections } from '@/components/read/page/organisms'

import {
  dynamicAtom,
  chaptersAtom,
  pageAtom,
  termsAtom,
} from '@/states/operation-dynamic.ts'
import { useAtom } from 'jotai'

export default function Page() {
  const [dynamic, setDynamic] = useAtom(dynamicAtom)
  const [chapters, setChapters] = useAtom(chaptersAtom)
  const [page, setPage] = useAtom(pageAtom)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean | null>(false)
  const { dynamic_id, chapter_id, page_id } = useParams()
  const [dynamicTerms, setDynamicTerms] = useAtom(termsAtom('dynamic'))
  const [chapterTerms, setChapterTerms] = useAtom(termsAtom('chapter'))
  const [pageTerms, setPageTerms] = useAtom(termsAtom('page'))

  useEffect(() => {
    ;(async () => {
      try {
        const apiUrl = `/api/dynamic?dynamic_id=${dynamic_id}&chapter_id=${chapter_id}&page_id=${page_id}`
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
          data.chapters.map((chapter) => {
            if (chapter_id === String(chapter.chapterId)) {
              setChapterTerms(chapter.terms)
              chapter.pages.map((page) => {
                if (page_id === String(page.pageId)) {
                  setPage(page)
                  setPageTerms(page.terms)
                }
              })
            }
          })
        }
      } catch (error) {
        console.error('API Routesの通信に失敗しました', error)
        setError('データの取得中にエラーが発生しました。')
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  return <Sections />
}
