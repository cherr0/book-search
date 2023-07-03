import styled from 'styled-components'

import { typography } from '~/styles/mixin'

export const BookDetailInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const ThumbnailBox = styled.div`
  width: 100%;
  max-height: 500px;
`

export const ImageUnit = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const TitleUnit = styled.div`
  color: var(--text-default);
  ${typography.title};
`

export const SubtitleUnit = styled.div`
  color: var(--text-weak);
  ${typography.subtitle_strong};
`

export const AuthorUnit = styled.div`
  color: var(--text-weak);
  ${typography.subtitle};
`
