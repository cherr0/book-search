import type { NextPage } from 'next'

import BookSearchList from './src/domain/features/book-search-list'
import SearchHeader from './src/domain/features/search-header'

import AsyncBoundary from '~/common/async-boundary'
import { CommonLayout } from '~/styles/layouts'

const Home: NextPage = () => {
  return (
    <CommonLayout>
      <AsyncBoundary>
        <SearchHeader />
      </AsyncBoundary>
      <AsyncBoundary>
        <BookSearchList />
      </AsyncBoundary>
    </CommonLayout>
  )
}

export default Home
