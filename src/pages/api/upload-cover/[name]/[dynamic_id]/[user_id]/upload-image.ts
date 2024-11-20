import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('API---------------')
  const { name, dynamic_id, user_id } = req.query
  console.log('API---------------')
  console.log(name)
  console.log(dynamic_id)
  console.log(user_id)
  // const name = formData.get('name')
  // const imageUrl = formData.get('image-url')
  // const dynamicId = formData.get('dynamic-id')
  // const sectionId = formData.get('section-id')
  // const userId = formData.get('user-id')

  // const body = {
  //   name: name,
  //   user_id: user_id,
  //   imageUrl: imageUrl,
  //   type_of_image_id: type_of_image_id,
  //   dynamic_id: dynamic_id,
  //   section_id: dynamic_id,
  //   folder_id: folder_id,
  // }

  // try {
  //   const apiUrl =
  //     'http://dynamic_novel_server:8080/proto.dynamic.v1.DynamicService/UploadImage'
  //   const response = await fetch(apiUrl, {
  //     cache: 'no-store',
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(body),
  //   })
  //   const data = await response.json()
  //   res.status(200).json(data)
  // } catch (error) {
  //   res
  //     .status(500)
  //     .json({ error: 'Failed to fetch data from the upload image API.' })
  // }
}
