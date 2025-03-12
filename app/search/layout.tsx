'use client'

import { Container } from '@mui/material'

import { Main } from '@/components/common/molecules'
import {
  LeftDrawer,
  LocalHeader,
  RightDrawer,
} from '@/components/common/organisms'

import Grid from '@mui/material/Grid2'
import { useTheme } from '@mui/material/styles'

export default function RootLayout({ children }: { children: ReactNode }) {
  const theme = useTheme()

  return (
    <>
      <LeftDrawer />
      <LocalHeader
        name='検索'
        leftDrawer='検索機能'
        rightDrawer='おすすめ'
        isCreate={false}
      />
      <Grid
        container
        style={{
          paddingTop: theme.spacing(18),
        }}
      >
        <Grid size={3}></Grid>
        <Grid size={6}>
          <Container>{children}</Container>
        </Grid>
        <Grid size={3}></Grid>
      </Grid>
      <RightDrawer />
    </>
  )
}
