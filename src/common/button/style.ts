import styled, { css } from 'styled-components'

import { ButtonProps } from './index'

import { noneDraggable } from '~/styles/mixin'
import { OptionalStyleRecord } from '~/types/common'

const widthStyle: OptionalStyleRecord<ButtonProps['width']> = {
  fill: css`
    width: 100%;
  `,
  hug: css`
    width: fit-content;
  `
}

export const ButtonWrapper = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  gap: 8px;
  padding: 8px;
  border: 1px solid;
  background-color: transparent;
  transition: border, color, background-color, 0.3s ease;

  ${noneDraggable};
  ${({ width, fixedWidth }) => {
    if (width === 'fixed') {
      return css`
        width: ${fixedWidth}px;
      `
    }
    return widthStyle[width]
  }};
`
