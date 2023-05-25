"use client"

import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { Stack, TextField, Button, Autocomplete } from '@mui/material'


const searchCategoryTargetItems = [
  "タイトル",
  "作者名",
  "タグ",
]

const Selecter = () => {
  const [searchCategory, setSearchCategory] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setSearchCategory(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="search-selecter-label">検索対象</InputLabel>
        <Select
          labelId="search-selecter-label"
          id="search-selecter"
          value={searchCategory}
          label="Age"
          onChange={handleChange}
        >
        {searchCategoryTargetItems.map((item, index) => {
          return (
            <MenuItem value={index} key={index}>{item}</MenuItem>
          );
        })}
        </Select>
      </FormControl>
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          id="search-input"
          disableClearable
          options={searchCategoryTargetItems.map((item) => item)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search input"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
        <Button variant="contained" type="submit" >
          検索
        </Button>
      </Stack>
    </Box>
  )
}

export default Selecter
