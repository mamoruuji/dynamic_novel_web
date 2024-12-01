'use client'

import { FormControl, InputLabel } from '@mui/material'

import { SearchStack, TextField } from '../atoms'
import { searchKeywordsAtom } from '@/states/search-request'
import { useAtom } from 'jotai'

export const Search = () => {
  const [searchKeywords, setSearchKeywords] = useAtom(searchKeywordsAtom)
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
