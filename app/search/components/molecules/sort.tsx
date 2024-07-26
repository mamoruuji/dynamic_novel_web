'use client'

import { useState, useEffect } from 'react'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'

import { SearchStack } from '../atoms'
import { sortCategoryAtom, sortOrderAtom } from '@/states/search-request'
import { useRecoilState } from 'recoil'

export const Sort = () => {
  const [sortOptions, setSortOptions] = useState([])
  const [isloads, setIsloads] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('/api/sort', {
          cache: 'force-cache',
        })

        const data = await response.json()
        if (!data.sorts || data.sorts.length === 0) {
          setError('指定された検索条件でヒットしませんでした。')
        } else {
          // コンポーネントの描画が完了してから、選択肢と初期値を設定
          setIsloads(true)
          setSortOptions(data.sorts)
          setSortCategory(sortCategory)
        }
      } catch (error) {
        console.error('API Routesの通信に失敗しました', error)
        setError('データの取得中にエラーが発生しました。')
      }
    })()
  }, [])

  const [sortCategory, setSortCategory] = useRecoilState(sortCategoryAtom)
  const [sortOrder, setSortOrder] = useRecoilState(sortOrderAtom)

  return (
    <FormControl>
      <SearchStack>
        <InputLabel id='sort-selecter-label'>ソート対象</InputLabel>
        <Select
          labelId='sort-selecter-label'
          id='sort-selecter'
          name='sort-category'
          value={isloads ? sortCategory : ''}
          onChange={(event) => setSortCategory(event.target.value)}
        >
          {sortOptions.map((item, index) => {
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
