import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { chaptersAtom } from '@/states/operation-dynamic.ts'
import { useAtom } from 'jotai'

export const AddChapterButton = () => {
  const [chapters, setChapters] = useAtom(chaptersAtom)

  const handleAddChapter = () => {
    const newChapter = {
      chapterId: 0, // 更新時サーバサイドで一意のIDを付与
      title: '新しい章',
      pages: [],
    }
    setChapters([...chapters, newChapter])
  }

  return (
    <ListItemButton sx={{ pl: 4 }} onClick={handleAddChapter}>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary={'章追加'} />
    </ListItemButton>
  )
}
