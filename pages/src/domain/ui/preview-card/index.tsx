import {
  ContentBox,
  ImageUnit,
  PreviewCardWrapper,
  SubtitleUnit,
  ThumbnailBox,
  TitleUnit
} from './style'

import defaultImage from '~/assets/image/default_image.png'

export interface Props {
  thumbnailUrl: string
  title?: string
  subtitle?: string
}

const PreviewCard = ({
  thumbnailUrl,
  title = 'title',
  subtitle = 'subtitle'
}: Props) => {
  return (
    <PreviewCardWrapper>
      <ThumbnailBox>
        <ImageUnit src={thumbnailUrl ?? defaultImage.src} alt='' />
      </ThumbnailBox>
      <ContentBox>
        <TitleUnit>{title}</TitleUnit>
        <SubtitleUnit>{subtitle}</SubtitleUnit>
      </ContentBox>
    </PreviewCardWrapper>
  )
}

export default PreviewCard
