'use client'

import { useAtom } from 'jotai'
import { useParams, usePathname } from 'next/navigation'

import { leftDrawerStateAtom } from '@/states/drawer-state.ts'
import { DrawerHeaderWithIcon, Drawer } from '@/components/common/atoms'
import { UserLinks } from '@/components/user/molecules'
import { Contents as CreateContents } from '@/components/create/dynamic/molecules'
import { Contents as ReadContents } from '@/components/read/dynamic/molecules'

import { SearchForm } from '@/components/search/organisms'

import { Divider, Stack } from '@mui/material'

export const LeftDrawer = () => {
  const [leftOpen, setLeftOpen] = useAtom(leftDrawerStateAtom)
  const { user_id } = useParams()
  const router = usePathname()
  const isSearch = router.includes('search')
  const isCreate = user_id && router.includes('dynamic')
  const isRead = !user_id && router.includes('dynamic')

  return (
    <Drawer anchor='left' open={leftOpen}>
      <DrawerHeaderWithIcon onClose={() => setLeftOpen(false)} anchor='left' />
      <Divider />
      {user_id && (
        <>
          <UserLinks />
          <Divider />
        </>
      )}
      {isSearch && (
        <>
          <SearchForm />
          <Divider />
        </>
      )}
      {isCreate && (
        <>
          <CreateContents />
          <Divider />
        </>
      )}
      {isRead && (
        <>
          <ReadContents />
          <Divider />
        </>
      )}
    </Drawer>
  )
}
