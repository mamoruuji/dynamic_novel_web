'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import { DynamicType } from '@types'

export default function Page() {
  const [dynamics, setDynamics] = useState<DynamicType[]>([])
  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('api/dynamic', {
          cache: 'force-cache', // SSG
          // cache: 'no-store', // SSR
          // next: { revalidate: 10 } // ISR
        })

        const data = await response.json()
        setDynamics(Object.entries(data)[0][1])
      } catch (error) {
        console.error('API Routesの通信に失敗しました', error)
      }
    })()
  }, [])

  return (
    <>
      <h1>共通</h1>
      <div>作品一覧画面</div>
      <div>
        <div>検索バー</div>
        <div>表示設定</div>
      </div>
      <div>
        <h3>作品一覧</h3>
        <div>
          <h3>作品1</h3>
          <div>
            <Link href='作品1URL'>作品1サムネ</Link>
          </div>
          <div>
            <Link href='作品1URL'>作品1情報</Link>
          </div>
        </div>
      </div>
      <div>作品群</div>
      {dynamics.map((dynamic, key) => (
        <div key={key}>
          <div>{dynamic.title}</div>
          <div>{dynamic.updatedAt}</div>
        </div>
      ))}
      <Link href='/'>Home</Link>
    </>
  )
}
