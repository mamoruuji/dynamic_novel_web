import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body
  const body = {
    dynamicId: data.dynamic_id,
    chapterId: data.chapter_id,
    pageId: data.page_id,
  }
  console.dir(body)

  try {
    const url =
      'http://dynamic_novel_server:8080/proto.dynamic.v1.SectionService/AddSection'
    const response = await fetch(url, {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create data from Section API.' })
  }
}
