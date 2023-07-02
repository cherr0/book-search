import { useQuery } from '@tanstack/react-query'

import { getBookDetail } from '~/api/book'
import { QueryKey } from '~/constants/query'
import useParams from '~/hooks/useParams'

const useBookDetailQuery = () => {
  const bookId = useParams('bookId')

  const { data: bookInfo, ...queryState } = useQuery(
    [QueryKey.GET_BOOK_DETAIL, bookId],
    () => getBookDetail(bookId),
    { enabled: !!bookId }
  )

  return { bookInfo, ...queryState }
}

export default useBookDetailQuery
