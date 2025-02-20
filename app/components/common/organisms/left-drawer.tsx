'use client'

import { Divider } from '@mui/material'
import { useAtom } from 'jotai'
import { useParams, usePathname } from 'next/navigation'

import { Drawer,DrawerHeaderWithIcon } from '@/components/common/atoms'
import { Contents as EditContents } from '@/components/contents/edit/molecules'
import { Contents as ReadContents } from '@/components/contents/read/molecules'
import { SearchForm } from '@/components/search/organisms'
import { UserLinks } from '@/components/user/molecules'
import { leftDrawerStateAtom } from '@/states/drawer-state.ts'

export const LeftDrawer = () => {
  const [leftOpen, setLeftOpen] = useAtom(leftDrawerStateAtom)
  const { user_id } = useParams()
  const router = usePathname()
  const isSearch = router.includes('search')
  const isEdit = user_id && router.includes('dynamic')
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
      {isEdit && (
        <>
          <EditContents />
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
