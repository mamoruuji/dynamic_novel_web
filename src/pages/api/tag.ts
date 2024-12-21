import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const url =
      'http://dynamic_novel_server:8080/proto.dynamic.v1.TagService/ListTags'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
    const data = await response.json()
    // console.dir(data)
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from tags API.' })
  }
}
