'use client'

import { Box, Button, FormGroup } from '@mui/material'
import { useParams } from 'next/navigation'
import { useRef } from 'react'
import { convertFilterDate, convertKeywords,poster } from 'src/libs/util'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'

import { SearchStack } from '../atoms'
import { Filter,Search, Sort } from '../molecules'

export const SearchForm = () => {
  const { user_id } = useParams()
  const formRef = useRef()
  const url = `/api/search/${user_id}`
  const { mutate } = useSWR(url)
  const { isMutating, trigger } = useSWRMutation(url, poster, {
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
      filter_end_date: filterEndDate,
      filter_keywords: filterKeywords,
      filter_start_date: filterStartDate,
      search_keywords: searchKeywords,
      sort_category: sortCategory,
      sort_order: sortOrder,
      user_id: user_id === undefined ? '' : user_id,
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
