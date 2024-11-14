'use server'

export const UpdateUser = async (prevState, formData: FormData) => {
  const penName = formData.get('penName')
  const text = formData.get('text')

  const requestUrl = headers().get('referer')
  const match = requestUrl.includes('user/') ? requestUrl.match(/user\/(.*?)\/search/) : null

  const userId = match && match[1] ? match[1] : null

  const body = {
    user_id: userId,
    pen_name: penName,
    text: text,
  }

  try {
    const apiUrl =
      'http://dynamic_novel_server:8080/proto.dynamic.v1.DynamicService/updateUser'
    const response = await fetch(apiUrl, {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
