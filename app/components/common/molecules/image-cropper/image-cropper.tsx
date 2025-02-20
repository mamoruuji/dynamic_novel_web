'use client'

import 'react-image-crop/dist/ReactCrop.css'

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
} from '@mui/material'
import { useAtom } from 'jotai'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { useRef,useState } from 'react'
import ReactCrop, {
  centerCrop,
  Crop,
  makeAspectCrop,
  PixelCrop,
} from 'react-image-crop'

import { imageDialogStateAtom } from '@/states/dialog-state.ts'

import { canvasPreview } from './canvas-preview'
import { useDebounceEffect } from './use-debounce-effect'

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
  const [imgSrc, setImgSrc] = useState('')
  const [imgName, setImgName] = useState('')
  const previewCanvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null) // 画像の参照
  const [croppedImage, setCroppedImage] = useState<string | null>(null) // クロップ後の画像
  const { dynamic_id, user_id } = useParams()

  const [dialogOpen, setDialogOpen] = useAtom(imageDialogStateAtom)

  const scale = 1
  const rotate = 0
  let aspect = 1
  let width = 400
  let height = 400
  switch (type) {
    case 'icon':
      aspect = 1
      width = 400
      height = 400
      break
    case 'cover':
      aspect = 9 / 16
      width = 900
      height = 1600
      break
    case 'illustration':
      aspect = 16 / 9
      width = 1600
      height = 900
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
      const { height, width } = e.currentTarget
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
    <>
      <Button variant='outlined' onClick={() => setDialogOpen(true)}>
        画像登録
      </Button>
      <Dialog open={dialogOpen}>
        <DialogTitle>画像をアップロード</DialogTitle>
        <DialogContent>
          <Input
            type='file'
            accept='image/*'
            hidden
            onChange={onSelectFile}
            text='画像をアップロード'
          />
          {!!imgSrc && (
            <ReactCrop
              src={imgSrc}
              crop={crop}
              onChange={(_, percentCrop) => setCrop(percentCrop)}
              onComplete={(c) => setCompletedCrop(c)}
              aspect={aspect}
              // minWidth={400}
              minHeight={100}
              height={'300px'}
              width={'300px'}
            >
              <Box
                height={'300px'}
                width={'300px'}
                style={{
                  backgroundColor: 'red',
                  position: 'relative',
                }}
              >
                <Image
                  ref={imgRef}
                  alt='Crop me'
                  src={imgSrc}
                  fill
                  style={{
                    // transform: `scale(${scale}) rotate(${rotate}deg)`,
                    objectFit: 'contain',
                  }}
                  unoptimized
                  onLoad={onImageLoad}
                />
              </Box>
            </ReactCrop>
          )}
          {!!completedCrop && (
            <Box>
              <canvas
                ref={previewCanvasRef}
                style={{
                  border: '1px solid black',
                  objectFit: 'contain',
                }}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>キャンセル</Button>
          <Button variant='contained' onClick={() => onDownloadCropClick()}>
            保存
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
