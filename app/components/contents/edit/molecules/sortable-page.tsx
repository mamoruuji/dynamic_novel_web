import {
  DeletePageDialog,
  SortableItem,
} from '@/components/contents/edit/atoms'
import { useAtom } from 'jotai'
import { chaptersAtom } from '@/states/operation-dynamic.ts'
import { poster } from 'src/libs/util'
import useSWRMutation from 'swr/mutation'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import LoginIcon from '@mui/icons-material/Login'

export const SortablePage = ({ id, chapterId, pageId, name }) => {
  const { user_id, dynamic_id } = useParams()
  const [chapters, setChapters] = useAtom(chaptersAtom)

  const renameUrl = `/api/rename`
  const { trigger } = useSWRMutation(renameUrl, poster)

  const handleEditPageTitle = (newTitle: string) => {
    setChapters(
      chapters.map((chapter) =>
        chapter.chapterId === chapterId
          ? {
              ...chapter,
              pages: (chapter.pages ?? []).map((page) =>
                page.pageId === pageId ? { ...page, title: newTitle } : page,
              ),
            }
          : chapter,
      ),
    )
    trigger({ id: pageId, name: newTitle, target: 'page' })
  }

  const PageLink = () => {
    const href = `/user/${user_id}/dynamic/${dynamic_id}/${chapterId}/${pageId}`

    return (
      <Link href={href} passHref>
        <LoginIcon />
      </Link>
    )
  }

  return (
    <SortableItem
      id={id}
      name={name}
      onEdit={(newTitle) => handleEditPageTitle(newTitle)}
      onDelete={
        <DeletePageDialog name={name} chapterId={chapterId} pageId={pageId} />
      }
      pageLink={<PageLink />}
    />
  )
}
