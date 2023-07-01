import useNewReleaseQuery from '../../hooks/useNewReleaseQuery'
import useSearchQuery from '../../hooks/useSearchQuery'

const BookSearchList = () => {
  const { newReleaseList } = useNewReleaseQuery()
  const { searchBookList, fetchNextPage } = useSearchQuery()

  return <div></div>
}

export default BookSearchList
