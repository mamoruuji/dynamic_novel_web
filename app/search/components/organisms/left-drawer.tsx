'use client'

import { useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'
import { useRecoilState } from 'recoil'
import { useTheme } from '@mui/material/styles'

import { leftDrawerStateAtom } from '@/states/drawer-state.ts'
import { dynamicsAtom } from '@/states/search-request.ts'
import { Search, Sort, Filter } from '../molecules'
import { DrawerHeaderWithIcon, Drawer } from '@/common/atoms'
import { SearchStack } from '../atoms'
import { GetSearchDynamics } from 'app/actions/search.ts'

import { Box, Button, Divider, FormGroup, Stack } from '@mui/material'

export const LeftDrawer = () => {
  const [leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)
  const [dynamics, setDynamics] = useRecoilState(dynamicsAtom)
  const ref = useRef(true)
  const ref2 = useRef(true)
  const [formState, formAction] = useFormState(GetSearchDynamics, {})
  const theme = useTheme()

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
    <Drawer anchor='left' open={leftOpen}>
      <DrawerHeaderWithIcon
        onClose={() => setLeftOpen(false)}
        anchor='left'
      />
      <Divider />
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
    </Drawer>
  )
}
