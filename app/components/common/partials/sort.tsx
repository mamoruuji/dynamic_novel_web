'use client'

import * as React from 'react'
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'

const sortCategoryTargetItems = [
  'タイトル',
  '作者名',
  'タグ',
  'お気に入り数',
  '初回公開日',
  '更新日',
  'ページ数',
  '星評価平均',
  '感想数',
]

export const Sort = () => {
  const [sortCategory, setSortCategory] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setSortCategory(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id='search-selecter-label'>検索対象</InputLabel>
        <Select
          labelId='search-selecter-label'
          id='search-selecter'
          value={sortCategory}
          label='Age'
          onChange={handleChange}
        >
          {sortCategoryTargetItems.map((item: string, index) => {
            return (
              <MenuItem value={index} key={index}>
                {item}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  )
}
