import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { dynamic_id } = req.query
  const body = req.body

  try {
    const url =
      'http://dynamic_novel_server:8080/proto.dynamic.v1.TagService/SetDynamicOnTag'
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
    res
      .status(500)
      .json({ error: 'Failed to fetch data from DynamicOnTag API.' })
  }
}
