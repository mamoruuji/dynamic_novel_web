'use client'

import { useRecoilState } from 'recoil'
import { useParams, usePathname } from 'next/navigation'

import { leftDrawerStateAtom } from '@/states/drawer-state.ts'
import { DrawerHeaderWithIcon, Drawer } from '@/components/common/atoms'
import { UserLinks } from '@/components/user/molecules'
import { SearchForm } from '@/components/search/organisms'
import { GetSearchDynamics } from 'app/actions/search.ts'

import {
  Divider,
  Stack
} from '@mui/material'

export const LeftDrawer = () => {
  const [leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)
  const { user_id } = useParams()
  const router = usePathname()
  const isSearch = router.includes('search')

  return (
    <Drawer anchor='left' open={leftOpen}>
      <DrawerHeaderWithIcon
        onClose={() => setLeftOpen(false)}
        anchor='left'
      />
      <Divider />
      {user_id && (
        <>
          <UserLinks />
          <Divider />
        </>
      )}
      {isSearch && (
        <>
          <SearchForm action={GetSearchDynamics}/>
          <Divider />
        </>
      )}
    </Drawer>
  )
}
