'use client'

import { useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'
import { useRecoilState } from 'recoil'

import { leftDrawerStateAtom } from '@/states/drawer-state.ts'
import { dynamicAtom } from '@/states/search-request.ts'
import { DrawerHeaderWithIcon, Drawer } from '@/common/atoms'
import { Contexts } from '@/common/molecules'

import { Box, Divider } from '@mui/material'

import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const LeftDrawer = () => {
  const [leftOpen, setLeftOpen] = useRecoilState(leftDrawerStateAtom)
  // const [dynamic, setDynamic] = useRecoilState(dynamicAtom)
  const ref = useRef(true)
  const ref2 = useRef(true)
  // const [formState, formAction] = useFormState(GetSearchDynamics, {})
  // console.dir(dynamic)
  const chapterPages = {
    章1: ['ページ1-1', 'ページ1-2', 'ページ1-3'],
    章2: [],
    章3: ['ページ3-3'],
    章1666666666666666666666: [],
    章2342: [],
    章2444: [],
    章2324: [],
    章2324222: [],
    章254443: [],
    章25555: [],
    章2545454: [],
    章2653453: [],
    章2333: [],
  }

  // console.dir(chapterPages)

  // useEffect(() => {
  //   if (ref.current) {
  //     ref.current = false
  //     return
  //   }
  //   // デバック用 StrictModeの２回実行対策
  //   if (ref2.current) {
  //     ref2.current = false
  //     return
  //   }
  //   setDynamics(formState)
  // }, [formState, formAction])

  return (
    <Drawer anchor='left' open={leftOpen}>
      <DrawerHeaderWithIcon
        className='justify-end'
        onClose={() => setLeftOpen(false)}
      />
      <Divider />
      <Box sx={{ mx: 'auto' }}>
        {Object.keys(chapterPeges).map((chapter, key) => {
          return (
            <Accordion key={key}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-content-${key}`}
                id={`panel-header-${key}`}
              >
                <Typography>{chapter}</Typography>
              </AccordionSummary>
              {chapterPeges[chapter].map((page, index) => {
                return (
                  <AccordionDetails key={index}>
                    <List component='div' disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={page} />
                      </ListItemButton>
                    </List>
                  </AccordionDetails>
                )
              })}
            </Accordion>
          )
        })}
      </Box>
    </Drawer>
  )
}
