// 'use client'

// import Link from 'next/link'
// import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
// import { useParams } from 'next/navigation'

// import ArrowRightIcon from '@mui/icons-material/ArrowRight'

// export const ContentsPage = ({ page, chapterId }) => {
//   const { dynamic_id } = useParams()
//   return (
//     <ListItemButton sx={{ pl: 4 }}>
//       <ListItemIcon>
//         <ArrowRightIcon />
//       </ListItemIcon>
//       <Link
//         href={`/dynamic/${dynamic_id}/${chapterId}/${page.pageId}`}
//         passHref
//       >
//         <ListItemText primary={page.name} />
//       </Link>
//     </ListItemButton>
//   )
// }

import { ContentsItem } from '@/components/contents/read/atoms'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import LoginIcon from '@mui/icons-material/Login'
import { Typography } from '@mui/material'
export const ContentsPage = ({ id, chapterId, pageId, name }) => {
  const { user_id, dynamic_id } = useParams()

  const PageLink = () => {
    const href = `/dynamic/${dynamic_id}/${chapterId}/${pageId}`

    return (
      <Link href={href} passHref>
        <Typography id={id} style={{ cursor: 'pointer' }}>
          {name}
        </Typography>
      </Link>
    )
  }

  return <ContentsItem id={id} name={name} pageLink={<PageLink />} />
}
