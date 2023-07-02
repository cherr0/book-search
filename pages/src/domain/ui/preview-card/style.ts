import styled from 'styled-components'

import { noneDraggable, typography } from '~/styles/mixin'

export const PreviewCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  border: 1px solid var(--border-default);
  border-radius: 8px;
  background-color: var(--surface-default);
  padding: 0;
  cursor: pointer;
  overflow: hidden;

  ${noneDraggable};
`

export const ThumbnailBox = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
`

export const ImageUnit = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 4px;
`

export const TitleUnit = styled.div`
  color: var(--text-default);
  ${typography.title};
`

export const SubtitleUnit = styled.div`
  color: var(--text-weak);
  ${typography.subtitle}
`
