'use client'

import {
  Button,
  CircularProgress,
  createFilterOptions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material'
import { useAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { useRef } from 'react'
import { convertKeywords, poster } from 'src/libs/util'
import useSWR, { mutate } from 'swr'
import useSWRMutation from 'swr/mutation'

import { TextField } from '@/components/search/atoms'
import { tagDialogStateAtom } from '@/states/dialog-state.ts'

const filter = createFilterOptions<FilmOptionType>()

export const TagEdit = () => {
  const [dialogOpen, setDialogOpen] = useAtom(tagDialogStateAtom)
  // 編集対象作品のタグ
  const { dynamic_id } = useParams()
  const dynamicUrl = `/api/dynamic/${dynamic_id}?dummyDynamic`
  const { data: dynamic } = useSWR(dynamicUrl)
  const dynamicAddTagUrl = `/api/dynamic/${dynamic_id}/tag`
  const { isMutating, trigger } = useSWRMutation(dynamicAddTagUrl, poster, {
    onSuccess: (newData) => {
      mutate(dynamicUrl)
      mutate(allTagUrl)
    },
  })
  const formRef = useRef()

  const handleTagChange = (event) => {
    const newTags = event // 入力値を取得

    // ローカルキャッシュを直接更新
    mutate(
      dynamicUrl,
      {
        ...dynamic, // 現在の dynamic データをコピー
        tags: newTags.map((name) => ({ name })), // 入力値を基に tags を更新
      },
      false, // サーバー再検証をスキップ
    )
  }

  // プルダウン表示用タグ全件
  const allTagUrl = `/api/tag`
  const { data: allTags, isLoading } = useSWR(allTagUrl)

  const handleCloseDialog = () => {
    setDialogOpen(false)
  }

  const handleButtonClick = (event) => {
    const formData = new FormData(formRef.current)
    const tagKeywords = convertKeywords(formData.get('tag-keywords'))

    const body = {
      dynamic_id: dynamic_id,
      tag_names: tagKeywords,
    }
    trigger(body)
  }

  if (isLoading) return <CircularProgress />

  return (
    <>
      <Button variant='outlined' onClick={() => setDialogOpen(true)}>
        タグ編集
      </Button>
      <Dialog open={dialogOpen}>
        <DialogTitle>タグ編集</DialogTitle>
        <form ref={formRef}>
          <DialogContent>
            <TextField
              id='tag-input'
              name='tag-keywords'
              value={dynamic?.tags.map((item) => item.name) || []}
              onChange={handleTagChange}
              itemKey='tag-key'
              label='タグキーワード'
              options={allTags.tags.map((item) => item.name)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>キャンセル</Button>
            <Button
              variant='contained'
              onClick={handleButtonClick}
              disabled={isMutating}
            >
              保存
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}
