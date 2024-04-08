'use client'
import { useState } from 'react'
import { Box } from '@mui/material'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  MouseSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'

import { Spinner, ChapterContentRead } from '@/common/atoms'
import { chaptersAtom } from '@/states/search-request.ts'
import { useRecoilState } from 'recoil'

// エラー対策 'Warning: Prop id did not match.'
import dynamic from 'next/dynamic'
const SortableItem = dynamic<Record<string, unknown>>(
  () => import('@/common/atoms').then((module) => module.SortableItem),
  { ssr: false },
)

export const Kanban = () => {
  const [activeId, setActiveId] = useState(null)
  const [chapters, setChapters] = useRecoilState(chaptersAtom)
  const sensors = useSensors(
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
  )

  function handleDragStart(event) {
    setActiveId(event.active.id)
  }

  function handleDragEnd(event) {
    const { active, over } = event

    if (over !== null && active.id !== over.id) {
      const oldIndex = chapters.findIndex(
        (chapter) => chapter.chapterId === active.id,
      )
      const newIndex = chapters.findIndex(
        (chapter) => chapter.chapterId === over.id,
      )
      setChapters((chapters) => arrayMove(chapters, oldIndex, newIndex))
    }
    setActiveId(null)
  }

  if (Object.keys(chapters).length === 0) return <Spinner />

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={chapters.map((_, index) => index)}
        strategy={verticalListSortingStrategy}
      >
        {chapters.map((chapter, key) => {
          return (
            <ChapterContentRead
              chapter={chapter}
              chapterKey={key}
              key={key}
              id={key}
            />
          )
        })}
      </SortableContext>
      <DragOverlay>{activeId ? <Box id={activeId} /> : null}</DragOverlay>
    </DndContext>
  )
}
