'use client'
import { useState } from 'react'
import { Box, CircularProgress } from '@mui/material'
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

import { ContentsChapter } from '../atoms'
import { dynamicAtom, chaptersAtom } from '@/states/search-request.ts'
import { useRecoilState } from 'recoil'

export const Contents = () => {
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

  if (Object.keys(chapters).length === 0) return <CircularProgress />

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
            <ContentsChapter
              chapter={chapter}
              chapterKey={key}
              key={key}
              id={chapter.chapterId}
            />
          )
        })}
      </SortableContext>
      <DragOverlay>{activeId ? <Box id={activeId} /> : null}</DragOverlay>
    </DndContext>
  )
}
