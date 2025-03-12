'use client'

import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material'

import { useAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { useRef, useState } from 'react'
import { poster, isEmptyObject, getMasterTypeId } from 'src/libs/util'
import useSWR, { mutate } from 'swr'
import useSWRMutation from 'swr/mutation'

import { RadioGroupField } from '@/components/dynamic/edit/atoms'
import { ImageCropper } from '@/components/common/molecules'
import {
  sectionDialogStateAtom,
  updateSectionTargetAtom,
} from '@/states/dialog-state.ts'

import Grid from '@mui/material/Grid2'

export const EditSectionDialog = () => {
  const [DialogOpen, setDialogOpen] = useAtom(sectionDialogStateAtom)
  const [updateSectionTarget, setUpdateSectionTarget] = useAtom(
    updateSectionTargetAtom,
  )

  const masterUrl = `/api/section-master`
  const { data: masters, error, isLoading } = useSWR(masterUrl)

  const { dynamic_id } = useParams()
  const sectionUrl = `/api/dynamic/${dynamic_id}?dummySection`
  const updateUrl = `/api/section/update`
  const { isMutating, trigger } = useSWRMutation(updateUrl, poster, {
    onSuccess: (newData) => {
      mutate(sectionUrl)
    },
  })
  const formRef = useRef()

  const handleCloseDialog = () => {
    setUpdateSectionTarget(null)
    setDialogOpen(false)
  }

  const handleButtonClick = (event) => {
    const formData = new FormData(formRef.current)
    const sectionId = updateSectionTarget?.sectionId
    // const imageUrl = formData.get('imageUrl')
    const imageUrl = '/images/NO_IMAGE.jpg'

    const name = formData.get('name')
    const typeSection = formData.get('typeSection')
    const frameColor = formData.get('frameColor')
    const typePosition = formData.get('typePosition')
    const typeAnimation = formData.get('typeAnimation')
    const text = formData.get('text')
    const textSize = formData.get('textSize')
    const textColor = formData.get('textColor')
    const font = formData.get('font')

    const body = {
      section_id: sectionId,
      imageUrl: imageUrl,
      name: name,
      typeSection: typeSection,
      frameColor: frameColor,
      typePosition: typePosition,
      typeAnimation: typeAnimation,
      text: text,
      textSize: textSize,
      textColor: textColor,
      font: font,
    }

    trigger(body)
    setDialogOpen(false)
  }

  if (error) return <Alert severity='warning'>{error}</Alert>
  if (isLoading) return <CircularProgress />
  if (isEmptyObject(masters)) return <Typography>No data</Typography>

  console.dir(masters)
  console.dir(updateSectionTarget)

  const sizeTypeMaster = [
    { id: 1, name: 8, value: 8 },
    { id: 2, name: 10, value: 10 },
    { id: 3, name: 12, value: 12 },
  ]

  return (
    <Dialog
      open={DialogOpen}
      onClose={handleCloseDialog}
      maxWidth='md'
      fullWidth
    >
      <DialogTitle>セクション編集</DialogTitle>
      <form ref={formRef}>
        <DialogContent>
          <Grid container spacing={2}>
            {/* 画像 */}
            <Grid size={12}>
              <ImageCropper type='icon' />
            </Grid>

            <Grid size={12}>
              <TextField
                name='name'
                value={updateSectionTarget?.name || ''}
                sx={{ '& .MuiInputBase-input': { height: 50 }, width: 400 }}
                placeholder='アイコン名'
                label='アイコン名'
              />
            </Grid>

            <Grid size={3}>
              <RadioGroupField
                label='タイプ'
                name='typeSection'
                options={masters.sectionTypeMaster}
                selectedValue={updateSectionTarget?.typeSectionId || 1}
                onChange={(valueId) =>
                  setUpdateSectionTarget((prev) => ({
                    ...prev,
                    typeSectionId: valueId,
                  }))
                }
              />
            </Grid>

            <Grid size={3}>
              <RadioGroupField
                label='フレーム色'
                name='frameColor'
                options={masters.colorTypeMaster}
                selectedValue={updateSectionTarget?.frameColorId || 1}
                onChange={(valueId) =>
                  setUpdateSectionTarget((prev) => ({
                    ...prev,
                    frameColorId: valueId,
                  }))
                }
              />
            </Grid>

            <Grid size={3}>
              <RadioGroupField
                label='アイコン位置'
                name='typePosition'
                options={masters.positionTypeMaster}
                selectedValue={updateSectionTarget?.typePositionId || 1}
                onChange={(valueId) =>
                  setUpdateSectionTarget((prev) => ({
                    ...prev,
                    typePositionId: valueId,
                  }))
                }
              />
            </Grid>

            <Grid size={3}>
              <RadioGroupField
                label='アニメーション'
                name='typeAnimation'
                options={masters.animationTypeMaster}
                selectedValue={updateSectionTarget?.typeAnimationId || 1}
                onChange={(valueId) =>
                  setUpdateSectionTarget((prev) => ({
                    ...prev,
                    typeAnimationId: valueId,
                  }))
                }
              />
            </Grid>

            <Grid size={12}>
              <TextField
                name='text'
                value={updateSectionTarget?.text || ''}
                // onChange={setUserText}
                sx={{ '& .MuiInputBase-input': { height: 50 }, width: 400 }}
                placeholder='文章'
                multiline
                rows={7}
              />
            </Grid>

            <Grid size={4}>
              <RadioGroupField
                label='文字の大きさ'
                name='textSize'
                options={masters.sizeTypeMaster}
                selectedValue={updateSectionTarget?.textSizeId || 1}
                onChange={(valueId) =>
                  setUpdateSectionTarget((prev) => ({
                    ...prev,
                    textSizeId: valueId,
                  }))
                }
              />
            </Grid>

            <Grid size={4}>
              <RadioGroupField
                label='テキスト色'
                name='textColor'
                options={masters.colorTypeMaster}
                selectedValue={updateSectionTarget?.textColorId || 1}
                onChange={(valueId) =>
                  setUpdateSectionTarget((prev) => ({
                    ...prev,
                    textColorId: valueId,
                  }))
                }
              />
            </Grid>

            <Grid size={4}>
              <RadioGroupField
                label='フォント'
                name='font'
                options={masters.fontTypeMaster}
                selectedValue={updateSectionTarget?.typeFontId || 1}
                onChange={(valueId) =>
                  setUpdateSectionTarget((prev) => ({
                    ...prev,
                    typeFontId: valueId,
                  }))
                }
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>キャンセル</Button>
          <Button
            color='secondary'
            onClick={handleButtonClick}
            disabled={isMutating}
          >
            確認
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
