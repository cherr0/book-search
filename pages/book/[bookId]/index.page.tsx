import React from 'react'

import BookDetailInfo from './src/features/book-detail-info'

import AsyncBoundary from '~/common/async-boundary'
import { CommonLayout } from '~/styles/layouts'

const BookDetailPage = () => {
  return (
    <CommonLayout>
      <AsyncBoundary>
        <BookDetailInfo />
      </AsyncBoundary>
    </CommonLayout>
  )
}

export default BookDetailPage
