'use server'

// import { authOptions } from "src/auth"
// import { getServerSession } from "next-auth"
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'

export const GetSearchDynamics = async (prevState, formData: FormData) => {
  const searchKeywords = formData.get('search-keywords').split(',')
  const sortCategory = formData.get('sort-category')
  const sortOrder = formData.get('sort-order')
  const filterKeywords = formData.get('filter-keywords').split(',')
  const filterStartDate = formData.get('filter-start-date')
  const filterEndDate = formData.get('filter-end-date')

  // urlからuser_idを取得
  const requestUrl = headers().get('referer')
  const match = requestUrl.includes('user/') ? requestUrl.match(/user\/(.*?)\/search/) : null

  const userId = match && match[1] ? match[1] : null
  // セッションからuser_idを取得
  // const session = await getServerSession(authOptions)
  // let userId = session?.user?.id

  const body = {
    user_id: userId,
    search_keywords: searchKeywords[0] === '' ? [] : searchKeywords,
    sort_category: sortCategory,
    sort_order: sortOrder,
    filter_keywords: filterKeywords[0] === '' ? [] : filterKeywords,
    filter_start_date: filterStartDate === 'YYYY/MM/DD' ? '' : filterStartDate,
    filter_end_date: filterEndDate === 'YYYY/MM/DD' ? '' : filterEndDate,
  }

  try {
    const apiUrl =
      'http://dynamic_novel_server:8080/proto.dynamic.v1.DynamicService/ListDynamics'
    const response = await fetch(apiUrl, {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const data = await response.json()
    return data['dynamics']
  } catch (error) {
    console.log(error)
  }
}
