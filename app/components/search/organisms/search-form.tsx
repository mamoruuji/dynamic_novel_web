'use client'

import { useRef } from 'react'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

import { SearchStack } from '../atoms'
import { Search, Sort, Filter } from '../molecules'
import { Box, Button, FormGroup } from '@mui/material'

import { poster, convertFilterDate, convertKeywords } from 'src/libs/util'

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
