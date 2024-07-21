'use client'

import { FormControl, InputLabel } from '@mui/material'
import { DatePicker, SearchStack, TextField } from '@/common/atoms'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { ja } from 'date-fns/locale/ja'
import { SelectChangeEvent } from '@mui/material/Select'

import {
  filterKeywordsAtom,
  filterStartDateAtom,
  filterEndDateAtom,
} from '@/states/search-request'

import { useRecoilState } from 'recoil'

export const Filter = () => {
  const [filterKeywords, setFilterKeywords] = useRecoilState(filterKeywordsAtom)
  const [filterStartDate, setFilterStartDate] =
    useRecoilState(filterStartDateAtom)
  const [filterEndDate, setFilterEndDate] = useRecoilState(filterEndDateAtom)

  return (
    <FormControl>
      <SearchStack>
        <InputLabel id='fliter-label'>フィルタ機能</InputLabel>
        <TextField
          id='filter-input'
          name='filter-keywords'
          value={filterKeywords}
          onChange={setFilterKeywords}
          itemKey='filter-key'
          label='除外キーワード'
        />
        <InputLabel id='fliter-label'>公開日</InputLabel>
        <LocalizationProvider
          dateAdapter={AdapterDateFns}
          adapterLocale={ja}
          dateFormats={{ monthAndYear: 'yyyy年 MM月' }}
        >
          <DatePicker
            label='開始日'
            name='filter-start-date'
            value={filterStartDate}
            onChange={setFilterStartDate}
          />
          <DatePicker
            label='終了日'
            name='filter-end-date'
            value={filterEndDate}
            onChange={setFilterEndDate}
          />
        </LocalizationProvider>
      </SearchStack>
    </FormControl>
  )
}
