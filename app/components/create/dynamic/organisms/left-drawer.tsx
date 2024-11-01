'use client'

import { DrawerHeaderWithIcon, Drawer } from '@/components/common/atoms'
import { leftDrawerStateAtom } from '@/states/drawer-state.ts'
import { useRecoilState } from 'recoil'
import { Contents } from '../molecules'

export const LeftDrawer = () => {
  const [leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)

  return (
    <Drawer anchor='left' open={leftOpen}>
      <DrawerHeaderWithIcon
        onClose={() => setLeftOpen(false)}
        anchor='left'
      />
      <Contents />
    </Drawer>
  )
}
