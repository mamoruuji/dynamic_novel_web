'use client'

import { useRef } from 'react'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

import { SearchStack } from '../atoms'
import { Search, Sort, Filter } from '../molecules'
import { Box, Button, FormGroup } from '@mui/material'

const poster = (url, { arg }) =>
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  }).then((res) => res.json())

export const SearchForm = () => {
  const { user_id } = useParams()
  const formRef = useRef()
  const url = `/api/search/${user_id}`
  const { mutate } = useSWR(url)
  const { trigger, isMutating } = useSWRMutation(url, poster, {
    onSuccess: (newData) => {
      mutate(newData, false)
    },
  })

  const convertFilterDate = (string) => (string === 'YYYY/MM/DD' ? '' : string)
  const convertKeywords = (array) => (array === '' ? [] : array.split())

  const handleButtonClick = (event) => {
    const formData = new FormData(formRef.current)
    const searchKeywords = convertKeywords(formData.get('search-keywords'))
    const sortCategory = formData.get('sort-category')
    const sortOrder = formData.get('sort-order')
    const filterKeywords = convertKeywords(formData.get('filter-keywords'))
    const filterStartDate = convertFilterDate(formData.get('filter-start-date'))
    const filterEndDate = convertFilterDate(formData.get('filter-end-date'))

    const body = {
      user_id: user_id === undefined ? '' : user_id,
      search_keywords: searchKeywords,
      sort_category: sortCategory,
      sort_order: sortOrder,
      filter_keywords: filterKeywords,
      filter_start_date: filterStartDate,
      filter_end_date: filterEndDate,
    }
    trigger(body)
  }

  return (
    <Box sx={{ mx: 'auto' }}>
      <form ref={formRef}>
        <FormGroup>
          <SearchStack>
            <Search />
            <Button
              variant='contained'
              type='button'
              onClick={handleButtonClick}
              disabled={isMutating}
            >
              検索
            </Button>
            <Sort />
            <Filter />
          </SearchStack>
        </FormGroup>
      </form>
    </Box>
  )
}
