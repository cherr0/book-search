import { InView } from 'react-intersection-observer'

import useSearchQuery from '../../hooks/useSearchQuery'
import PreviewList from '../../ui/preview-list'

const BookSearchList = () => {
  const { searchBookList, fetchNextPage, hasNextPage } = useSearchQuery()

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
      {hasNextPage && (
        <>
          <div>Loading...</div>
          <InView
            onChange={(inView, entry) => {
              if (entry.boundingClientRect.y > 300 && inView) fetchNextPage()
            }}
          />
        </>
      )}
    </PreviewList>
  )
}

export default BookSearchList
