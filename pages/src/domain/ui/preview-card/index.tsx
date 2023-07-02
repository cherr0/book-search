import {
  ContentBox,
  ImageUnit,
  PreviewCardWrapper,
  SubtitleUnit,
  ThumbnailBox,
  TitleUnit
} from './style'

export interface Props {
  thumbnailUrl: string
  title?: string
  subtitle?: string
}

const PreviewCard = ({
  thumbnailUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2dM2rpp1m8GOXl9CEKJ5KrQEA7-2ihbmRFg&usqp=CAU',
  title = 'title',
  subtitle = 'subtitle'
}: Props) => {
  return (
    <PreviewCardWrapper>
      <ThumbnailBox>
        <ImageUnit src={thumbnailUrl} alt='' />
      </ThumbnailBox>
      <ContentBox>
        <TitleUnit>{title}</TitleUnit>
        <SubtitleUnit>{subtitle}</SubtitleUnit>
      </ContentBox>
    </PreviewCardWrapper>
  )
}

export default PreviewCard
