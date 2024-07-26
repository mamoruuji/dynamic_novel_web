'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

import { Sections } from './components/organisms'

import { dynamicAtom, chaptersAtom, pageAtom, termsAtom } from '@/states/operation-dynamic.ts'
import { useRecoilState } from 'recoil'

export default function Page() {
  const [dynamic, setDynamic] = useRecoilState(dynamicAtom)
  const [chapters, setChapters] = useRecoilState(chaptersAtom)
  const [page, setPage] = useRecoilState(pageAtom)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean | null>(false)
  const { dynamic_id, chapter_id, page_id } = useParams()
  const [dynamicTerms, setDynamicTerms] = useRecoilState(termsAtom('dynamic'))
  const [chapterTerms, setChapterTerms] = useRecoilState(termsAtom('chapter'))
  const [pageTerms, setPageTerms] = useRecoilState(termsAtom('page'))

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
