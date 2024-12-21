'use client'

import { useParams } from 'next/navigation'

import { Alert, Box, CircularProgress } from '@mui/material'
import { Overview } from '@/components/create/dynamic/organisms/'

import {
  dynamicAtom,
  chaptersAtom,
  termsAtom,
  tagsAtom,
} from '@/states/operation-dynamic.ts'
import { useSetAtom } from 'jotai'

import useSWR from 'swr'

import { isEmptyObject } from 'src/libs/util'

export default function Page() {
  const setDynamic = useSetAtom(dynamicAtom)
  const setChapters = useSetAtom(chaptersAtom)
  const setTags = useSetAtom(tagsAtom)

  const { dynamic_id } = useParams()
  const url = `/api/dynamic/${dynamic_id}`
  const { data, error, isLoading } = useSWR(url)
  const setDynamicTerms = useSetAtom(termsAtom('dynamic'))

  if (data && !isEmptyObject(data)) {
    setDynamic(data)
    setChapters(data.chapters || [])
    setDynamicTerms(data.terms || [])
    setTags((data.tags || []).map((item) => item.name))
  }

  if (error) return <Alert severity='warning'>{error}</Alert>
  if (isLoading) return <CircularProgress />
  if (isEmptyObject(data)) return <Typography>No data</Typography>

  return <Overview />
}
