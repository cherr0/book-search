import { useRouter } from 'next/router'
import React from 'react'

import useNewReleaseQuery from '../../hooks/useNewReleaseQuery'
import PreviewList from '../../ui/preview-list'

import { InternalPath } from '~/constants/route'

const NewReleaseList = () => {
  const { newReleaseList } = useNewReleaseQuery()
  const { push } = useRouter()

  const handleCardClick = (bookId: string) => {
    push(InternalPath.DETAIL + bookId)
    console.log('click')
  }

  return (
    <PreviewList>
      {newReleaseList.map(({ title, subtitle, image, isbn13 }) => (
        <PreviewList.Item
          key={isbn13}
          title={title}
          subtitle={subtitle}
          thumbnailUrl={image}
          onClick={() => handleCardClick(isbn13)}
        />
      ))}
    </PreviewList>
  )
}

export default NewReleaseList
