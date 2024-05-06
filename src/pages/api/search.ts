import { NextApiRequest, NextApiResponse } from 'next'

import { snapshot_UNSTABLE } from 'recoil'
import {
  searchKeywordsAtom,
  sortCategoryAtom,
  sortOrderAtom,
  filterKeywordsAtom,
  filterStartDateAtom,
  filterEndDateAtom,
} from '@/states/search-request.ts'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const snapshot = await snapshot_UNSTABLE()
  const searchKeywords = snapshot.getLoadable(searchKeywordsAtom).contents
  const sortCategory = snapshot.getLoadable(sortCategoryAtom).contents
  const sortOrder = snapshot.getLoadable(sortOrderAtom).contents
  const filterKeywords = snapshot.getLoadable(filterKeywordsAtom).contents
  const filterStartDate = snapshot.getLoadable(filterStartDateAtom).contents
  const filterEndDate = snapshot.getLoadable(filterEndDateAtom).contents

  const body = {
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
    res.status(200).json(data)
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Failed to fetch data from the dynamics API.' })
  }
}
