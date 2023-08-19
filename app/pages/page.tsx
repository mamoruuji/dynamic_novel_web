"use client"
import Link from "next/link"
import { useState, useEffect } from 'react'

import { PageType } from "../../src/types"

export default function Page() {
  const [pages, setPages] = useState<pageType[]>([])
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/pages', {
          cache: 'force-cache', // SSG
          // cache: 'no-store', // SSR
          // next: { revalidate: 10 } // ISR
        })

        const data = await response.json()
        setPages(Object.entries(data)[0][1])
      } catch (error) {
        console.error('API Routesの通信に失敗しました', error)
      }
    })()
  }, [])

  return (
    <>
      <div>todo</div>
      {pages.map((page, key) => (
        <div key={key}>{page.title}</div>
      ))}
      <Link href="/">Home</Link>
    </>
  )
}

