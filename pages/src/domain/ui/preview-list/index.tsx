import React, { ReactNode } from 'react'

import { ContentField, PreviewListWrapper } from './style'
import PreviewCard from '../preview-card'

export interface Props {
  children?: ReactNode
}

const PreviewList = ({ children }: Props) => {
  return (
    <PreviewListWrapper>
      <ContentField>{children}</ContentField>
    </PreviewListWrapper>
  )
}

export default Object.assign(PreviewList, {
  Item: PreviewCard
})
