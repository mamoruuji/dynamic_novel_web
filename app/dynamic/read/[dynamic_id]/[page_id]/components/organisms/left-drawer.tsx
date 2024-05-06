'use client'

import { DrawerHeaderWithIcon, Drawer } from '@/common/atoms'
import { leftDrawerStateAtom } from '@/states/drawer-state.ts'
import { useRecoilState } from 'recoil'
import { Contents } from '../molecules/'

export const LeftDrawer = () => {
  const [leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)

  return (
    <Drawer anchor='left' open={leftOpen}>
      <DrawerHeaderWithIcon
        className='justify-end'
        onClose={() => setLeftOpen(false)}
      />
      <Contents />
    </Drawer>
  )
}
