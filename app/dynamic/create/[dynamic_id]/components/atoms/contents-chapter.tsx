'use client'
import { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  Typography,
} from '@mui/material'
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
  useSortable,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'
import { CSS } from '@dnd-kit/utilities'

import { ContentsPage, AddPageButton } from './'
import { pagesAtom } from '@/states/search-request.ts'
import { useRecoilState } from 'recoil'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const ContentsChapter = ({ chapter, chapterKey, id }) => {
  const [activeId, setActiveId] = useState(null)
  const [pages, setPages] = useRecoilState(pagesAtom(chapter.chapterId))
  useEffect(() => {
    setPages(chapter.pages)
  }, [])

  // dnd 章部分
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: chapter.chapterId })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  // dnd ページ部分
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
      const oldIndex = pages.findIndex((page) => page.pageId === active.id)
      const newIndex = pages.findIndex((page) => page.pageId === over.id)
      setPages((pages) => arrayMove(pages, oldIndex, newIndex))
    }
    setActiveId(null)
  }

  return (
    <Accordion
      key={chapterKey}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-content-${chapterKey}`}
        id={`panel-header-${chapterKey}`}
      >
        <Typography>{chapter.title}</Typography>
      </AccordionSummary>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis]}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        {typeof pages !== 'undefined' && (
          <SortableContext
            items={pages.map((_, index) => index)}
            strategy={verticalListSortingStrategy}
          >
            {pages.map((page, index) => {
              return (
                <AccordionDetails key={index} id={index}>
                  <List component='div' disablePadding>
                    <ContentsPage page={page} />
                  </List>
                </AccordionDetails>
              )
            })}
          </SortableContext>
        )}
        <DragOverlay>{activeId ? <Box id={activeId} /> : null}</DragOverlay>
      </DndContext>
      <AddPageButton />
    </Accordion>
  )
}
