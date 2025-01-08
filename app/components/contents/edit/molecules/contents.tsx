'use client'

import { useState } from 'react'

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
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable'
import { restrictToVerticalAxis } from '@dnd-kit/modifiers'

import {
  AddChapterButton,
  AddPageButton,
  ConfirmDeleteDialog,
} from '@/components/contents/edit/atoms'

import {
  SortableChapter,
  SortablePage,
} from '@/components/contents/edit/molecules'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  Box,
  Button,
  CircularProgress,
  List,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { chaptersAtom } from '@/states/operation-dynamic.ts'
import { useAtom } from 'jotai'
import useSWR from 'swr'
import useSWRMutation from 'swr/mutation'
import { poster } from 'src/libs/util'

import { useParams } from 'next/navigation'

export const Contents = () => {
  const [chapters, setChapters] = useAtom(chaptersAtom)

  const { dynamic_id } = useParams()
  const url = `/api/dynamic/${dynamic_id}`
  const { data, error, isLoading, mutate } = useSWR(url, {
    onSuccess: (data) => setChapters(data.chapters),
  })

  const sensors = useSensors(useSensor(MouseSensor))
  const [activeId, setActiveId] = useState(null)

  const handleDragStart = (event: DragStartEvent) =>
    setActiveId(event.active.id)

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over || active.id === over.id) {
      setActiveId(null)
      return
    }
    const [activeType, activeId] = active.id.split(':')
    const [overType, overId] = over.id.split(':')

    if (activeType === 'chapter' && overType === 'chapter') {
      // 並び替え: 章の並び替え
      const activeIndex = chapters.findIndex(
        (c) => c.chapterId === Number(activeId),
      )
      const overIndex = chapters.findIndex(
        (c) => c.chapterId === Number(overId),
      )
      const updatedChapters = arrayMove(chapters, activeIndex, overIndex)
      setChapters(updatedChapters)
    } else if (activeType === 'page' && overType === 'chapter') {
      // ページの移動: 別の章に移動
      const sourceChapterIndex = chapters.findIndex((chapter) =>
        (chapter.pages ?? []).some((page) => page.pageId === Number(activeId)),
      )
      const sourceChapter = chapters[sourceChapterIndex]
      const targetChapterIndex = chapters.findIndex(
        (chapter) => chapter.chapterId === Number(overId),
      )
      const targetChapter = chapters[targetChapterIndex]

      const pageToMove = (sourceChapter.pages ?? []).find(
        (page) => page.pageId === Number(activeId),
      )
      if (!pageToMove) return

      // ページの移動処理
      const updatedSourceChapter = {
        ...sourceChapter,
        pages: (sourceChapter.pages ?? []).filter(
          (page) => page.pageId !== Number(activeId),
        ),
      }
      const updatedTargetChapter = {
        ...targetChapter,
        pages: [...(targetChapter.pages ?? []), pageToMove], // pages が存在しない場合は空配列を使用
      }

      const updatedData = [...chapters]
      updatedData[sourceChapterIndex] = updatedSourceChapter
      updatedData[targetChapterIndex] = updatedTargetChapter

      setChapters(updatedData)
    } else if (activeType === 'page' && overType === 'page') {
      // ページの並び替えまたは移動
      const sourceChapterIndex = chapters.findIndex((chapter) =>
        (chapter.pages ?? []).some((page) => page.pageId === Number(activeId)),
      )
      const sourceChapter = chapters[sourceChapterIndex]

      const targetChapterIndex = chapters.findIndex((chapter) =>
        (chapter.pages ?? []).some((page) => page.pageId === Number(overId)),
      )
      const targetChapter = chapters[targetChapterIndex]

      const activePageIndex = (sourceChapter.pages ?? []).findIndex(
        (page) => page.pageId === Number(activeId),
      )
      const targetPageIndex = (targetChapter.pages ?? []).findIndex(
        (page) => page.pageId === Number(overId),
      )

      if (sourceChapterIndex === -1 || activePageIndex === -1) return

      const pageToMove = (sourceChapter.pages ?? [])[activePageIndex]
      if (!pageToMove) return

      const updatedChapters = [...chapters]

      if (sourceChapterIndex === targetChapterIndex) {
        // 同一章内での並び替え
        const updatedPages = arrayMove(
          sourceChapter.pages ?? [],
          activePageIndex,
          targetPageIndex,
        )
        updatedChapters[sourceChapterIndex] = {
          ...sourceChapter,
          pages: updatedPages,
        }
      } else {
        // 異なる章への移動
        const updatedSourcePages = (sourceChapter.pages ?? []).filter(
          (_, index) => index !== activePageIndex,
        )
        const updatedTargetPages = [
          ...(targetChapter.pages ?? []).slice(0, targetPageIndex),
          pageToMove,
          ...(targetChapter.pages ?? []).slice(targetPageIndex),
        ]

        updatedChapters[sourceChapterIndex] = {
          ...sourceChapter,
          pages: updatedSourcePages,
        }
        updatedChapters[targetChapterIndex] = {
          ...targetChapter,
          pages: updatedTargetPages,
        }
      }

      setChapters(updatedChapters)
    }
    setActiveId(null)
  }

  // 並び替えAPI作成中
  // const orderUrl = `/api/dynamic/order`
  // const { trigger, isMutating } = useSWRMutation(orderUrl, poster, {
  //   onSuccess: () => {
  //     mutate()
  //   },
  // })

  // const handleSaveOrder = async () => {
  //   if (!chapters) return
  // // 同名のページは使用できません
  // // 同名の章は使用できません

  //   try {
  //     await trigger(chapters)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }
  if (error) return <Alert severity='warning'>{error}</Alert>
  if (isLoading) return <CircularProgress />

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={chapters.map((chapter) => `chapter:${chapter.chapterId}`)}
          strategy={verticalListSortingStrategy}
        >
          {chapters.map((chapter) => (
            <Accordion key={chapter.chapterId}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={
                  chapter.pages === undefined ? { backgroundColor: 'red' } : {}
                }
              >
                <SortableChapter
                  id={`chapter:${chapter.chapterId}`}
                  chapterId={chapter.chapterId}
                  name={chapter.title}
                  style={{
                    border:
                      activeId === `chapter:${chapter.chapterId}`
                        ? '2px solid blue'
                        : undefined,
                  }}
                />
              </AccordionSummary>
              <AccordionDetails>
                <SortableContext
                  items={(chapter.pages ?? []).map(
                    (page) => `page:${page.pageId}`,
                  )}
                  strategy={verticalListSortingStrategy}
                >
                  <List>
                    {chapter.pages && chapter.pages.length > 0 ? (
                      chapter.pages.map((page) => (
                        <SortablePage
                          key={page.pageId}
                          id={`page:${page.pageId}`}
                          chapterId={chapter.chapterId}
                          pageId={page.pageId}
                          name={page.title}
                          style={{
                            border:
                              activeId === `page:${page.pageId}`
                                ? '2px solid green'
                                : undefined,
                          }}
                        />
                      ))
                    ) : (
                      <Box
                        id={`chapter:${chapter.chapterId}`}
                        className='empty-drop-area'
                        style={{
                          border: '1px dashed gray',
                          padding: '8px',
                          backgroundColor: activeId?.startsWith('page:')
                            ? '#f0f8ff'
                            : undefined,
                        }}
                      >
                        Drop pages here
                      </Box>
                    )}
                    <AddPageButton chapterId={chapter.chapterId} />
                  </List>
                </SortableContext>
              </AccordionDetails>
            </Accordion>
          ))}
        </SortableContext>
        <DragOverlay>
          {activeId?.startsWith('chapter:') && (
            <Box
              style={{
                padding: '8px',
                border: '2px solid blue',
                backgroundColor: 'white',
              }}
            >
              {
                chapters.find((c) => `chapter:${c.chapterId}` === activeId)
                  ?.title
              }
            </Box>
          )}
          {activeId?.startsWith('page:') && (
            <Box
              style={{
                padding: '8px',
                border: '2px solid green',
                backgroundColor: 'white',
              }}
            >
              {
                chapters
                  .flatMap((c) => c.pages ?? [])
                  .find((p) => `page:${p.pageId}` === activeId)?.title
              }
            </Box>
          )}
        </DragOverlay>
      </DndContext>
      <AddChapterButton />
      <Button
        variant='contained'
        color='primary'
        onClick={() => {
          console.log('Save logic here')
        }}
        style={{ marginTop: '1rem' }}
      >
        Save Order
      </Button>
      <ConfirmDeleteDialog />
    </>
  )
}
