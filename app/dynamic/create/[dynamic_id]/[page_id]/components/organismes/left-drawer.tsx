'use client'

import { DrawerHeaderWithIcon, Drawer } from '@/common/atoms'
import { Contexts } from '../molecules'
import { leftDrawerStateAtom } from '@/states/drawer-state.ts'
import { useRecoilState } from 'recoil'

import { Box, Divider, IconButton } from '@mui/material'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

export const LeftDrawer = () => {
  const [leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)

  return (
    <Drawer anchor='left' open={leftOpen}>
      <DrawerHeaderWithIcon
        className='justify-end'
        onClose={() => setLeftOpen(false)}
      />
      <Divider />
      <Box>
        <Contexts />
      </Box>
    </Drawer>
  )
}
