import { useInfiniteQuery } from '@tanstack/react-query'

import useKeywordStore from './useKeywordStore'

import { getBookSearchList } from '~/api/book'
import { QueryKey } from '~/constants/query'
import { Book, SearchBookResponse } from '~/types/book'

const useSearchQuery = () => {
  const { searchKeywords, isAvailableBook } = useKeywordStore()

  const { data, ...queryState } = useInfiniteQuery<SearchBookResponse>(
    [QueryKey.GET_BOOK_SEARCH, searchKeywords],
    ({ pageParam: page = 1 }) => getBookSearchList(searchKeywords, page),
    {
      enabled: searchKeywords.length !== 0,
      getNextPageParam: (lastPage, allPage) => {
        const { total } = lastPage
        const maxSize = Math.ceil(total / 10) === allPage.length
        return maxSize ? undefined : allPage.length + 1
      }
    }
  )

  const allPageBookList =
    data?.pages.reduce((acc, { books }) => [...acc, ...books], [] as Book[]) ??
    []

  const searchBookList = allPageBookList.filter(({ title }) =>
    isAvailableBook(title)
  )

  return { searchBookList, ...queryState }
}

export default useSearchQuery
