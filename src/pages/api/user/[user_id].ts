import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { user_id } = req.query
  const body = {
    user_id: user_id,
  }

  try {
    const apiUrl =
      'http://dynamic_novel_server:8080/proto.dynamic.v1.UserService/GetUser'
    const response = await fetch(apiUrl, {
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
      .json({ error: 'Failed to fetch data from the user API.' })
  }
}
