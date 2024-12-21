'use client'

import useSWR from 'swr'
import { useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import { FormControl, InputLabel } from '@mui/material'

import { SearchStack, TextField } from '../atoms'
import { searchKeywordsAtom } from '@/states/search-request'
import { useAtom } from 'jotai'

export const Search = () => {
  const [searchKeywords, setSearchKeywords] = useAtom(searchKeywordsAtom)
  const query = useSearchParams()
  let tag = query.get('tag')
  const ref = useRef(true)
  const ref2 = useRef(true)

  useEffect(() => {
    if (ref.current) {
      ref.current = false
      return
    }
    // デバック用 StrictModeの２回実行対策
    if (ref2.current) {
      ref2.current = false
      return
    }
    if (tag)
      setSearchKeywords((prevTags) =>
        prevTags.length ? [...prevTags, tag] : [tag],
      )
  }, [query])

  return (
    <FormControl>
      <SearchStack>
        <InputLabel id='search-selecter-label'>検索</InputLabel>
        <TextField
          id='search-input'
          name='search-keywords'
          value={searchKeywords}
          onChange={setSearchKeywords}
          itemKey='search-key'
          label='検索キーワード'
        />
      </SearchStack>
    </FormControl>
  )
}
