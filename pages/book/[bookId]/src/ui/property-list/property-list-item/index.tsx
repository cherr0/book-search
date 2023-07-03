import React from 'react'

import { PropertyListItemWrapper, TitleUnit, ValueUnit } from './style'

export interface Props {
  title: string
  value: string
}

const PropertyListItem = ({ title, value }: Props) => {
  return (
    <PropertyListItemWrapper>
      <TitleUnit>{title}</TitleUnit>
      <ValueUnit>{value}</ValueUnit>
    </PropertyListItemWrapper>
  )
}

export default PropertyListItem
