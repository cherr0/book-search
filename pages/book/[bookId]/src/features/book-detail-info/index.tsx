import React from 'react'

import {
  AuthorUnit,
  BookDetailInfoWrapper,
  ImageUnit,
  InformationBox,
  SubtitleUnit,
  ThumbnailBox,
  TitleUnit
} from './style'
import useBookDetailQuery from '../../hooks/useBookDetailQuery'
import PropertyList from '../../ui/property-list'

const BookDetailInfo = () => {
  const { bookInfo, descriptionData } = useBookDetailQuery()
  const { image, title, subtitle, authors, publisher } = bookInfo

  console.log(descriptionData)

  return (
    <BookDetailInfoWrapper>
      <ThumbnailBox>
        <ImageUnit src={image} />
      </ThumbnailBox>
      <InformationBox>
        <TitleUnit>{title}</TitleUnit>
        <SubtitleUnit>{subtitle}</SubtitleUnit>
        <AuthorUnit>
          Authors: {authors} | Publisher: {publisher}
        </AuthorUnit>
      </InformationBox>
      <PropertyList>
        {Object.entries(descriptionData).map(([title, value]) => (
          <PropertyList.Item key={title} title={title} value={value} />
        ))}
      </PropertyList>
    </BookDetailInfoWrapper>
  )
}

export default BookDetailInfo
