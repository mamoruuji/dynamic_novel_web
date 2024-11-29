import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { user_id } = req.query
  // console.dir('API-----------------')
  // console.dir(user_id)
  // console.dir(user_id[0])
  let body = {
    user_id: user_id[0] === 'undefined' ? '' : user_id[0],
    search_keywords: [],
    sort_category: '4',
    sort_order: 'asc',
    filter_keywords: [],
    filter_start_date: '',
    filter_end_date: '',
  }
  if (req.body !== '') body = req.body
  // console.dir(body)

  try {
    const url =
      'http://dynamic_novel_server:8080/proto.dynamic.v1.DynamicService/ListDynamics'
    const response = await fetch(url, {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()
    // console.dir('RES-----------------')
    // console.dir(data)
    res.status(200).json(data)
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to fetch data from the dynamics API.' })
  }
}
