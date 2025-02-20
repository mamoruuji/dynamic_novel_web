'use client'

import { FormControl, InputLabel } from '@mui/material'
import { useAtom } from 'jotai'
import { useSearchParams } from 'next/navigation'
import { useEffect, useRef } from 'react'

import { searchKeywordsAtom } from '@/states/search-request'

import { SearchStack, TextField } from '../atoms'

export const Search = () => {
  const [searchKeywords, setSearchKeywords] = useAtom(searchKeywordsAtom)
  const ref = useRef(true)
  const ref2 = useRef(true)

  // タグクリックされた際、検索フォームにタグの文言追加
  const query = useSearchParams()
  let tag = query.get('tag')
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
  }, [tag, setSearchKeywords])

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
