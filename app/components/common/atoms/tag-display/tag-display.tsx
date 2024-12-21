'use client'

import Link from 'next/link'
import { Button, Typography } from '@mui/material'
import styles from './tag-display.module.sass'

import { isEmptyObject } from 'src/libs/util'

export const TagDisplay = ({ tags }) => {
  if (!Array.isArray(tags)) return <Typography>タグ無し</Typography>
  return (
    <>
      {tags.map((tag) => (
        <Link
          href={{
            pathname: '/search',
            query: { tag: tag.name },
          }}
          key={tag.tagId}
          passHref
        >
          <Button className={styles['tag-button']}>#{tag.name}</Button>
        </Link>
      ))}
    </>
  )
}
