import {
  DeleteChapterDialog,
  SortableItem,
} from '@/components/contents/edit/atoms'
import { useAtom } from 'jotai'
import { chaptersAtom } from '@/states/operation-dynamic.ts'
import { poster } from 'src/libs/util'
import useSWRMutation from 'swr/mutation'

export const SortableChapter = ({ id, chapterId, name }) => {
  const [chapters, setChapters] = useAtom(chaptersAtom)

  const renameUrl = `/api/rename`
  const { trigger } = useSWRMutation(renameUrl, poster)

  const handleEditChapterTitle = (newTitle: string) => {
    setChapters(
      chapters.map((chapter) =>
        chapter.chapterId === chapterId
          ? { ...chapter, title: newTitle }
          : chapter,
      ),
    )
    trigger({ id: chapterId, name: newTitle, target: 'chapter' })
  }

  return (
    <SortableItem
      id={id}
      name={name}
      onEdit={(newTitle) => handleEditChapterTitle(newTitle)}
      onDelete={<DeleteChapterDialog name={name} chapterId={chapterId} />}
    />
  )
}
