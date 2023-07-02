import { useQuery } from '@tanstack/react-query'

import useKeywordStore from './useKeywordStore'

import { getNewBookList } from '~/api/book'
import { QueryKey } from '~/constants/query'

const useNewReleaseQuery = () => {
  const { keywords } = useKeywordStore()
  const { data, ...queryData } = useQuery(
    [QueryKey.GET_NEW_RELEASE],
    () => getNewBookList(),
    {
      enabled: keywords.length === 0
    }
  )

  const newReleaseList = data?.books ?? []

  return { newReleaseList, ...queryData }
}

export default useNewReleaseQuery
