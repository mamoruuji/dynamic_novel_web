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
import useSWR from 'swr'

import { tagsAtom } from '@/states/operation-dynamic'
import { useAtom } from 'jotai'

import { poster, convertKeywords } from 'src/libs/util'

const filter = createFilterOptions<FilmOptionType>()

export const TagEdit = () => {
  // 編集対象作品のタグ
  const [tags, setTags] = useAtom(tagsAtom)
  const { dynamic_id } = useParams()
  const formRef = useRef()

  // 編集対象作品のタグ
  const url = `/api/dynamic/${dynamic_id}`
  const { mutate } = useSWR(url)
  const { trigger, isMutating } = useSWRMutation(url, poster, {
    onSuccess: (newData) => {
      mutate(newData, false)
    },
  })

  // プルダウン表示用タグ全件
  const tagUrl = `/api/tag`
  const { data, isLoading } = useSWR(tagUrl)

  const handleButtonClick = (event) => {
    const formData = new FormData(formRef.current)
    const tagKeywords = convertKeywords(formData.get('tag-keywords'))

    const body = {
      dynamic_id: dynamic_id,
      tag_names: tagKeywords,
    }
    try {
      const url = `/api/dynamic/${dynamic_id}/tag`
      const response = fetch(url, {
        cache: 'no-store',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
    } catch (error) {
      console.error('API Routesの通信に失敗しました', error)
    } finally {
    }
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
            value={tags}
            onChange={setTags}
            itemKey='tag-key'
            label='タグキーワード'
            options={data.tags.map((item) => item.name)}
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
