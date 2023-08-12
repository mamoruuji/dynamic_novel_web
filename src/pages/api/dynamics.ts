import { NextApiRequest, NextApiResponse } from "next"
import { DynamicType } from "../../src/types"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const apiUrl = 'http://api:8080/proto.dynamic.v1.DynamicService/GetDynamics'
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from the API.' })
  }
}
