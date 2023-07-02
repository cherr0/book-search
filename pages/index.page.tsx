import type { NextPage } from 'next'

import BookSearchList from './src/domain/features/book-search-list'
import NewReleaseList from './src/domain/features/new-release-list'
import SearchHeader from './src/domain/features/search-header'
import useKeywordStore from './src/domain/hooks/useKeywordStore'

import AsyncBoundary from '~/common/async-boundary'
import { CommonLayout } from '~/styles/layouts'

const Home: NextPage = () => {
  const { hasKeyword } = useKeywordStore()

  const RenderList = hasKeyword ? BookSearchList : NewReleaseList

  return (
    <CommonLayout>
      <AsyncBoundary>
        <SearchHeader />
      </AsyncBoundary>
      <AsyncBoundary>
        <RenderList />
      </AsyncBoundary>
    </CommonLayout>
  )
}

export default Home
