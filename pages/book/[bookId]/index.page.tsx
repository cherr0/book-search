import React from 'react'

import BookDetailInfo from './src/features/book-detail-info'

import AsyncBoundary from '~/common/async-boundary'
import useParams from '~/hooks/useParams'
import { CommonLayout } from '~/styles/layouts'

const BookDetailPage = () => {
  const bookId = useParams('bookId')

  if (!bookId) return <></>

  return (
    <CommonLayout>
      <AsyncBoundary>
        <BookDetailInfo />
      </AsyncBoundary>
    </CommonLayout>
  )
}

export default BookDetailPage
