import React, { HTMLAttributes, ReactNode } from 'react'

import { ContentField, PreviewListWrapper } from './style'
import PreviewCard from '../preview-card'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

const PreviewList = ({ children, ...restProps }: Props) => {
  return (
    <PreviewListWrapper {...restProps}>
      <ContentField>{children}</ContentField>
    </PreviewListWrapper>
  )
}

export default Object.assign(PreviewList, {
  Item: PreviewCard
})
