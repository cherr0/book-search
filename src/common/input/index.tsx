import { forwardRef, HTMLAttributes } from 'react'

import { InputField, InputWrapper } from '~/common/input/style'

export interface Props extends HTMLAttributes<HTMLInputElement> {
  width?: 'hug' | 'fill' | 'fixed'
  fixedWidth?: number
  defaultValue?: string
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ width = 'hug', fixedWidth, ...restProps }, ref) => {
    return (
      <InputWrapper width={width}>
        <InputField
          {...restProps}
          ref={ref}
          fixedWidth={fixedWidth}
          width={width}
        ></InputField>
      </InputWrapper>
    )
  }
)

Input.displayName = 'Input'

export default Input
