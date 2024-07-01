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
  chapters: GetChaptersType[]
  createdTime: string
  updatedTime: string
}

export type GetChaptersType = {
  chapterId: number
  title: string
  order: number
  pages: GetPagesType[]
}

export type GetPagesType = {
  pageId: number
  title: string
  order: number
}

export type GeTermsType = {
  termId: number
  name: string
  order: number
}
