'use client'

import {
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from '@mui/material'
import { useAtom } from 'jotai'
import { isEmptyObject } from 'src/libs/util'
import useSWR from 'swr'

import { sortCategoryAtom, sortOrderAtom } from '@/states/search-request'

import { SearchStack } from '../atoms'

export const Sort = () => {
  const url = `/api/sort`
  const { data, isLoading } = useSWR(url)
  const [sortCategory, setSortCategory] = useAtom(sortCategoryAtom)
  const [sortOrder, setSortOrder] = useAtom(sortOrderAtom)

  if (isLoading) return <CircularProgress />
  if (isEmptyObject(data)) return <Typography>No sort data</Typography>
  return (
    <FormControl>
      <SearchStack>
        <InputLabel id='sort-selecter-label'>ソート対象</InputLabel>
        <Select
          labelId='sort-selecter-label'
          id='sort-selecter'
          name='sort-category'
          value={sortCategory}
          onChange={(event) => setSortCategory(event.target.value)}
        >
          {data.sorts.map((item, index) => {
            return (
              <MenuItem value={index} key={index}>
                {item.name}
              </MenuItem>
            )
          })}
        </Select>
        <FormLabel id='sort-order-label'>並び順</FormLabel>
        <RadioGroup
          aria-labelledby='sort-order-label'
          name='sort-order'
          value={sortOrder}
          onChange={(event) => setSortOrder(event.target.value)}
        >
          <FormControlLabel value='asc' control={<Radio />} label='昇順' />
          <FormControlLabel value='desc' control={<Radio />} label='降順' />
        </RadioGroup>
      </SearchStack>
    </FormControl>
  )
}
