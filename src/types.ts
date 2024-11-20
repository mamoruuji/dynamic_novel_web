export type ListDynamicsType = {
  dynamicId: number
  title: string
  overview: string
  userId: string
  userPenName: string
  imageUrl: string
  tags: GetTagType[]
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

export type GetTermsType = {
  termId: number
  name: string
  order: number
}

export type GetTagType = {
  tagId: number
  name: string
}

export type GetUserType = {
  userId: number
  name: string
  email: string
  penName: string
  text: string
  imageUrl: string
  createdTime: string
  updatedTime: string
}

export type GetImageType = {
  imageId: string
  name: string
  imageUrl: string
  folderId: number
  createdTime: string
  updatedTime: string
}
