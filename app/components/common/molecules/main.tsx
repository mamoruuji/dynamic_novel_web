'use client'

import { styled } from '@mui/material/styles'
import { leaveTransition, enterTransition } from '@/components/common/atoms'
import {
  leftDrawerStateAtom,
  rightDrawerStateAtom,
} from '@/states/drawer-state.ts'
import { useRecoilState } from 'recoil'

export const Main = styled('main')(({ theme }) => {
  const [leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)
  const [rightOpen, setRightOpen] = useRecoilState(rightDrawerStateAtom)

  return {
    flexGrow: 1,
    paddingTop: theme.spacing(18),
    position: 'relative',
    ...leaveTransition(theme, 'margin'),
    // marginLeft: 0,
    marginLeft: `${process.env.NEXT_PUBLIC_DRAWERWIDTH}`,
    ...(leftOpen && {
      // marginLeft: `${process.env.NEXT_PUBLIC_DRAWERWIDTH}`,
      ...enterTransition(theme, 'margin'),
    }),
    // marginRight: 0,
    marginRight: `${process.env.NEXT_PUBLIC_DRAWERWIDTH}`,
    ...(rightOpen && {
      // marginRight: `${process.env.NEXT_PUBLIC_DRAWERWIDTH}`,
      ...enterTransition(theme, 'margin'),
    }),
  }
})
