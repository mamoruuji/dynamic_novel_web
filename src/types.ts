export type ListDynamicsType = {
  dynamicId: number
  title: string
  overview: string
  userId: string
  published: boolean
  createdTime: string
  updatedTime: string
}

export type GetDynamicType = {
  dynamicId: number
  title: string
  overview: string
  userId: string
  published: boolean
  chapters: ChapterType[]
  createdTime: string
  updatedTime: string
}

type ChapterType = {
  chapterId: number
  title: string
  order: number
  pages: PageType[]
}

type PageType = {
  pageId: number
  title: string
  order: number
}
