'use client'

import { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { useFormState } from 'react-dom'

import { SearchStack } from '../atoms'
import { Search, Sort, Filter } from '../molecules'
import { Box, Button, FormGroup } from '@mui/material'
import { GetSearchDynamics } from 'app/actions/search.ts'
import { dynamicsAtom } from '@/states/search-request.ts'

export const SearchForm = () => {
  const ref = useRef(true)
  const ref2 = useRef(true)
  const [formState, formAction] = useFormState(GetSearchDynamics, {})
  const [dynamics, setDynamics] = useRecoilState(dynamicsAtom)

  useEffect(() => {
    if (ref.current) {
      ref.current = false
      return
    }
    // デバック用 StrictModeの２回実行対策
    if (ref2.current) {
      ref2.current = false
      return
    }
    setDynamics(formState)
  }, [formState, formAction])

  return (
    <Box sx={{ mx: 'auto' }}>
      <form action={formAction}>
        <FormGroup>
          <SearchStack>
            <Search />
            <Button variant='contained' type='submit'>
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
