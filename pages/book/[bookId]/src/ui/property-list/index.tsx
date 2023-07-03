import { ReactNode } from 'react'

import PropertyListItem from './property-list-item'
import { PropertyListWrapper } from './style'

export interface Props {
  children?: ReactNode
}

const PropertyList = ({ children }: Props) => {
  return <PropertyListWrapper>{children}</PropertyListWrapper>
}

export default Object.assign(PropertyList, {
  Item: PropertyListItem
})
