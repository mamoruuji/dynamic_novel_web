'use client'

import * as React from 'react'
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Stack,
  TextField,
  Button,
  Select,
  Autocomplete,
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'

const searchCategoryTargetItems = ['タイトル', '作者名', 'タグ']

export const Selecter = () => {
  const [searchCategory, setSearchCategory] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setSearchCategory(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id='search-selecter-label'>検索対象</InputLabel>
        <Select
          labelId='search-selecter-label'
          id='search-selecter'
          value={searchCategory}
          label='Age'
          onChange={handleChange}
        >
          {searchCategoryTargetItems.map((item, index) => {
            return (
              <MenuItem value={index} key={index}>
                {item}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          id='search-input'
          disableClearable
          options={searchCategoryTargetItems.map((item) => item)}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Search input'
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
        <Button variant='contained' type='submit'>
          検索
        </Button>
      </Stack>
    </Box>
  )
}
