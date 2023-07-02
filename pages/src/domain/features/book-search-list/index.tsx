import useSearchQuery from '../../hooks/useSearchQuery'
import PreviewList from '../../ui/preview-list'

const BookSearchList = () => {
  const { searchBookList, fetchNextPage } = useSearchQuery()

  return (
    <PreviewList>
      {searchBookList.map(({ title, subtitle, image, isbn13 }) => (
        <PreviewList.Item
          key={isbn13}
          title={title}
          subtitle={subtitle}
          thumbnailUrl={image}
        />
      ))}
    </PreviewList>
  )
}

export default BookSearchList
