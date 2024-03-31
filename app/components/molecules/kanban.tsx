'use client'
import { useState } from 'react'
import { Box } from '@mui/material'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'

import { Spinner, ChapterContentRead } from '@/common/atoms'
import { dynamicAtom } from '@/states/search-request.ts'
import { useRecoilState } from 'recoil'

import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CloseIcon from '@mui/icons-material/Close'

// エラー対策 'Warning: Prop id did not match.'
import dynamic from 'next/dynamic'
const SortableItem = dynamic<Record<string, unknown>>(
  () => import('@/common/atoms').then((module) => module.SortableItem),
  { ssr: false },
)

export const Kanban = () => {
  const [items, setItems] = useState([1, 2, 3])
  const [dynamic, setDynamic] = useRecoilState(dynamicAtom)
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  function handleDragEnd(event) {
    const { active, over } = event

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  if (Object.keys(dynamic).length === 0) return <Spinner />

  return (
    // <DndContext
    //   sensors={sensors}
    //   collisionDetection={closestCenter}
    //   onDragEnd={handleDragEnd}
    // >
    //   <SortableContext items={items} strategy={verticalListSortingStrategy}>
    //     {items.map((id) => (
    //       <SortableItem key={id} id={id} />
    //     ))}
    //   </SortableContext>
    // </DndContext>
    <Box>
      {dynamic.chapters.map((chapter, key) => {
        return (
          <ChapterContentRead chapter={chapter} chapterKey={key} key={key} />
        )
      })}
    </Box>
  )
}
