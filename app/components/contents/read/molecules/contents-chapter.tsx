// import {
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   List,
//   Typography,
// } from '@mui/material'

// import { ContentsPage } from './'

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// export const ContentsChapter = ({ chapter, chapterKey, id }) => {
//   return (
//     <Accordion>
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls={`panel-content-${chapterKey}`}
//         id={`panel-header-${chapterKey}`}
//       >
//         <Typography>{chapter.title}</Typography>
//       </AccordionSummary>
//       {typeof chapter.pages !== 'undefined' &&
//         chapter.pages.map((page, index) => {
//           return (
//             <AccordionDetails key={index} id={index}>
//               <List component='div' disablePadding>
//                 <ContentsPage page={page} chapterId={id} />
//               </List>
//             </AccordionDetails>
//           )
//         })}
//     </Accordion>
//   )
// }

import { ContentsItem } from '@/components/contents/read/atoms'

export const ContentsChapter = ({ id, chapterId, name }) => {
  return <ContentsItem id={id} name={name} />
}
