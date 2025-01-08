import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { chaptersAtom } from '@/states/operation-dynamic.ts'
import { useAtom } from 'jotai'

export const AddPageButton = ({ chapterId }) => {
  const [chapters, setChapters] = useAtom(chaptersAtom)

  const handleAddPage = (chapterId: number) => {
    const newPage = {
      pageId: 0, // 更新時サーバサイドで一意のIDを付与
      title: '新しいページ',
    }
    setChapters(
      chapters.map((chapter) =>
        chapter.chapterId === chapterId
          ? { ...chapter, pages: [...(chapter.pages ?? []), newPage] }
          : chapter,
      ),
    )
  }

  return (
    <ListItemButton sx={{ pl: 4 }} onClick={() => handleAddPage(chapterId)}>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary={'ページ追加'} />
    </ListItemButton>
  )
}
