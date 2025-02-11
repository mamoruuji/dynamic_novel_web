import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body
  const body = {
    pageId: data.page_id,
  }

  try {
    const url =
      'http://dynamic_novel_server:8080/proto.dynamic.v1.PageService/DeletePage'
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
    res.status(500).json({ error: 'Failed to Delete data from Page API.' })
  }
}
