'use client'

import { useState } from 'react'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import { useParams } from 'next/navigation'

import { Accordion, Box, Button, CircularProgress } from '@mui/material'
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

import {
  AddChapterButton,
  ContentsChapter,
} from '@/components/contents/edit/atoms'
import { chaptersAtom } from '@/states/operation-dynamic.ts'
import { useAtom } from 'jotai'

import { poster } from 'src/libs/util'

export const Contents = () => {
  const [activeId, setActiveId] = useState(null)
  const [chapters, setChapters] = useAtom(chaptersAtom)

  const { dynamic_id } = useParams()
  const url = `/api/dynamic/${dynamic_id}`
  const { data, error, isLoading, mutate } = useSWR(url, {
    onSuccess: (data) => setChapters(data.chapters),
  })

  // 並び替えAPI作成中
  const orderUrl = `/api/order`
  const { trigger, isMutating } = useSWRMutation(orderUrl, poster, {
    onSuccess: () => {
      mutate()
    },
  })

  const sensors = useSensors(
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
    useSensor(MouseSensor, { activationConstraint: { distance: 5 } }),
  )

  const handleDragStart = (event) => setActiveId(event.active.id)

  const handleDragEnd = (event) => {
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
  const handleSaveOrder = async () => {
    if (!chapters) return

    try {
      await trigger(chapters)
    } catch (err) {
      console.error(err)
    }
  }

  if (error) return <Alert severity='warning'>{error}</Alert>
  if (isLoading) return <CircularProgress />

  return (
    <>
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
      <Accordion>
        <AddChapterButton />
      </Accordion>
      <Button
        variant='contained'
        color='primary'
        onClick={handleSaveOrder}
        style={{ marginTop: '1rem' }}
      >
        Save Order
      </Button>
    </>
  )
}
