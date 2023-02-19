"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

type SearchCategoryType = {
  title: string;
}

const searchCategoryTargetItems: SearchCategoryType[]= [
  { title: "タイトル", },
]

const Selecter = () => {
  const [searchCategory, setSearchCategory] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setSearchCategory(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="search-selecter-label">検索対象</InputLabel>
        <Select
          labelId="search-selecter-label"
          id="search-selecter"
          value={searchCategory}
          label="Age"
          onChange={handleChange}
        >
        {searchCategoryTargetItems.map((item: SearchCategoryType) => {
          return (
            <MenuItem value={item.title}>{item.title}</MenuItem>
          );
        })}
        </Select>
      </FormControl>
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          id="search-input"
          disableClearable
          options={searchCategoryTargetItems.map((option) => option.title)}
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
      </Stack>
    </Box>
  )
}

export default Selecter
