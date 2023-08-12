"use client"
import Link from "next/link"
import { useState, useEffect } from 'react'

import { DynamicType } from "../../src/types"

export default function Page() {
  const [dynamics, setDynamics] = useState<DynamicType[]>([])
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/dynamics', {
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
      <div>todo</div>
      {dynamics.map((dynamic, key) => (
        <div key={key}>{dynamic.title}</div>
      ))}
      <Link href="/">Home</Link>
    </>
  )
}

