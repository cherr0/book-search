import { useInfiniteQuery } from '@tanstack/react-query'

import useKeywordStore from './useKeywordStore'

import { getBookSearchList } from '~/api/book'
import { QueryKey } from '~/constants/query'
import { SearchBookResponse } from '~/types/book'

const useSearchQuery = () => {
  const { keywords, isAvailableBook } = useKeywordStore()

  const { data, ...queryState } = useInfiniteQuery<SearchBookResponse>(
    [QueryKey.GET_BOOK_SEARCH, keywords],
    ({ pageParam: page = 1 }) => getBookSearchList(keywords, page),
    {
      enabled: keywords.length !== 0,
      getNextPageParam: (lastPage, allPage) => {
        const { total } = lastPage
        const maxSize = Math.ceil(total / 10) === allPage.length
        return maxSize ? undefined : allPage.length + 1
      }
    }
  )

  const allPageBookList = data?.pages.reduce(
    (acc, { books }) => [...acc, ...books],
    []
  )

  const searchBookList = allPageBookList?.filter(({ title }) =>
    isAvailableBook(title)
  )

  return { searchBookList, ...queryState }
}

export default useSearchQuery
