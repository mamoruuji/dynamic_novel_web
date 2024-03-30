'use client'

import { useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'
import { useRecoilState } from 'recoil'
import useTheme from '@mui/material/styles/useTheme'

import { leftDrawerStateAtom } from '@/states/drawer-state.ts'
import { dynamicsAtom } from '@/states/search-request.ts'
import { Search, Sort, Filter } from '@/common/molecules'
import { DrawerHeader, Drawer } from '@/common/atoms'
import { GetSearchDynamics } from 'app/actions/search.ts'

import {
  Box,
  Button,
  Divider,
  FormGroup,
  IconButton,
  Stack,
} from '@mui/material'

import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const LeftDrawer = () => {
  const theme = useTheme()
  const [leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)
  const [dynamics, setDynamics] = useRecoilState(dynamicsAtom)
  const ref = useRef(true)
  const ref2 = useRef(true)
  const [formState, formAction] = useFormState(GetSearchDynamics, {})

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
      <DrawerHeader className='justify-end'>
        <IconButton onClick={() => setLeftOpen(false)}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <Box sx={{ mx: 'auto' }}>
        <form action={formAction}>
          <FormGroup sx={{ width: 300 }}>
            <Stack spacing={2} sx={{ width: 300, py: 2 }}>
              <Search />
              <Button variant='contained' type='submit'>
                検索
              </Button>
              <Sort />
              <Filter />
            </Stack>
          </FormGroup>
        </form>
      </Box>
    </Drawer>
  )
}
