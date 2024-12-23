'use client'

import { useParams } from 'next/navigation'
import { useRef } from 'react'
import {
  Alert,
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  createFilterOptions,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'
import { Dialog } from './dialog'
import { TextField } from '@/components/search/atoms'

import useSWRMutation from 'swr/mutation'
import useSWR, { mutate } from 'swr'

import { poster, convertKeywords } from 'src/libs/util'

const filter = createFilterOptions<FilmOptionType>()

export const TagEdit = () => {
  // 編集対象作品のタグ
  const { dynamic_id } = useParams()
  const dynamicUrl = `/api/dynamic/${dynamic_id}`
  const { data: dynamic } = useSWR(dynamicUrl)
  const dynamicAddTagUrl = `/api/dynamic/${dynamic_id}/tag`
  const { trigger, isMutating } = useSWRMutation(dynamicAddTagUrl, poster, {
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
    <Dialog buttonText='タグ編集'>
      <DialogTitle>タグ編集</DialogTitle>
      <form ref={formRef}>
        <DialogContent>
          <TextField
            id='tag-input'
            name='tag-keywords'
            value={dynamic.tags.map((item) => item.name)}
            onChange={handleTagChange}
            itemKey='tag-key'
            label='タグキーワード'
            options={allTags.tags.map((item) => item.name)}
          />
        </DialogContent>
        <DialogActions>
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
  )
}
