'use client'

import useTheme from '@mui/material/styles/useTheme'

import { DrawerHeader, Drawer } from '@/common/atoms'
import { Kanban } from '@/common/molecules'
import { leftDrawerStateAtom } from '@/states/drawer-state.ts'
import { useRecoilState } from 'recoil'

import { Box, Divider, IconButton } from '@mui/material'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export const LeftDrawer = () => {
  const theme = useTheme()
  const [leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)

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
      <Box>
        <Kanban />
      </Box>
      <Divider />
    </Drawer>
  )
}
