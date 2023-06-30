import React, { HTMLAttributes, ReactNode } from 'react'

import { ButtonWrapper } from './style'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  width?: 'fill' | 'hug' | 'fixed'
  fixedWidth?: number
  disabled?: boolean
  children?: ReactNode
}

export const Button = ({
  width = 'hug',
  children,
  disabled,
  ...restProps
}: ButtonProps) => {
  return (
    <ButtonWrapper {...restProps} width={width} disabled={disabled}>
      {children}
    </ButtonWrapper>
  )
}
