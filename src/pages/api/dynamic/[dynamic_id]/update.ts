import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { dynamic_id } = req.query
  const body = req.body

  const dynamicId = formData.get('dynamic-id')
  const title = formData.get('title')
  const overview = formData.get('overview')
  const published = formData.get('published')

  const body = {
    dynamic_id: dynamic_id,
    title: title,
    overview: overview,
    published: published,
    // tags: tag[0] === '' ? [] : tags,
  }

  try {
    const url =
      'http://dynamic_novel_server:8080/proto.dynamic.v1.DynamicService/UpdateDynamicStatus'
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
      .json({ error: 'Failed to update data from Dynamic detail API.' })
  }
}
