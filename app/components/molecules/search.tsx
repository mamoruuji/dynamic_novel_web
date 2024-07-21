'use client'

import { FormControl, InputLabel } from '@mui/material'

import { SearchStack, TextField } from '@/common/atoms'
import { searchKeywordsAtom } from '@/states/search-request'
import { useRecoilState } from 'recoil'

export const Search = () => {
  const [searchKeywords, setSearchKeywords] = useRecoilState(searchKeywordsAtom)
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
