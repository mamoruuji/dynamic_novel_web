import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body

  try {
    const url =
      'http://dynamic_novel_server:8080/proto.dynamic.v1.dynamicService/RenameItem'
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
    res.status(500).json({ error: 'Failed to update data from the page API.' })
  }
}
