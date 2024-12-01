'use client'

import { useState, useRef } from 'react'
import { useAtom } from 'jotai'
import { useParams } from 'next/navigation'

import {
  Box,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Input,
  Typography,
  Stack,
} from '@mui/material'
import { canvasPreview } from './canvas-preview'
import { useDebounceEffect } from './use-debounce-effect'
import { Dialog } from '@/components/common/atoms'
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

import { dialogStateAtom } from '@/states/dialog-state.ts'

const centerAspectCrop = (
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) => {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  )
}

export const ImageCropper = ({ type }) => {
  const [dialogOpen, setDialogOpen] = useAtom(dialogStateAtom)
  const [imgSrc, setImgSrc] = useState('')
  const [imgName, setImgName] = useState('')
  const previewCanvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null) // 画像の参照
  const [croppedImage, setCroppedImage] = useState<string | null>(null) // クロップ後の画像
  const { user_id, dynamic_id } = useParams()

  const scale = 1
  const rotate = 0
  let aspect = 1
  switch (type) {
    case 'icon':
      aspect = 1
      break
    case 'cover':
      aspect = 9 / 16
      break
    case 'illustration':
      aspect = 16 / 9
      break

    default:
      break
  }

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined) // Makes crop preview update between images.
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || ''),
      )
      setImgName(e.target.files[0].name)
      reader.readAsDataURL(e.target.files[0])
    }
  }

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

  const onDownloadCropClick = async () => {
    const image = imgRef.current
    const previewCanvas = previewCanvasRef.current
    if (!image || !previewCanvas || !completedCrop)
      throw new Error('Crop canvas does not exist')

    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height

    const offscreen = new OffscreenCanvas(
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
    )
    const ctx = offscreen.getContext('2d')
    if (!ctx) throw new Error('No 2d context')

    // 画像表示
    ctx.drawImage(
      previewCanvas,
      0,
      0,
      previewCanvas.width,
      previewCanvas.height,
      0,
      0,
      offscreen.width,
      offscreen.height,
    )

    // 画像登録
    console.log('image--------')
    // console.dir(image)
    // console.dir(previewCanvas)
    // console.dir(offscreen)
    // console.dir(ctx)
    console.dir(croppedImage)
    console.dir(completedCrop)

    console.log('image--------')

    const apiUrl = `/api/upload-cover/${imgName}/${dynamic_id}/${user_id}/upload-image`
    const response = await fetch(apiUrl, {
      cache: 'no-store',
      method: 'POST',
    })

    if (response.ok) {
      console.log('Image saved successfully')
    } else {
      console.error('Error saving image')
    }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate,
        )
      }
    },
    100,
    [completedCrop, scale, rotate],
  )

  return (
    <Dialog buttonText='画像登録'>
      <DialogTitle>画像をアップロード</DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Input
            type='file'
            accept='image/*'
            hidden
            onChange={onSelectFile}
            text='画像をアップロード'
          />
          {croppedImage && (
            <Box>
              <Typography variant='h6'>クロップ結果:</Typography>
              <img
                src={croppedImage}
                alt='Cropped'
                style={{ maxWidth: '100%', borderRadius: '8px' }}
              />
            </Box>
          )}
        </Stack>
        {!!imgSrc && (
          <ReactCrop
            src={imgSrc}
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={aspect}
            // minWidth={400}
            minHeight={100}
          >
            <img
              ref={imgRef}
              alt='Crop me'
              src={imgSrc}
              style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
              onLoad={onImageLoad}
            />
          </ReactCrop>
        )}
        {!!completedCrop && (
          <>
            <Box>
              <canvas
                ref={previewCanvasRef}
                style={{
                  border: '1px solid black',
                  objectFit: 'contain',
                  width: completedCrop.width,
                  height: completedCrop.height,
                }}
              />
            </Box>
          </>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setDialogOpen(false)}>キャンセル</Button>
        <Button variant='contained' onClick={() => onDownloadCropClick()}>
          保存
        </Button>
      </DialogActions>
    </Dialog>
  )
}
