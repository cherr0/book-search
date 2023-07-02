import React from 'react'

import useNewReleaseQuery from '../../hooks/useNewReleaseQuery'
import PreviewList from '../../ui/preview-list'

const NewReleaseList = () => {
  const { newReleaseList } = useNewReleaseQuery()

  return (
    <PreviewList>
      {newReleaseList.map(({ title, subtitle, image, isbn13 }) => (
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

export default NewReleaseList
