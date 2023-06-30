import styled from 'styled-components'

import { Props } from '.'

export const InputWrapper = styled.div<{ width: Props['width'] }>`
  display: flex;
  flex-direction: column;

  width: ${({ width }) => (width === 'fill' ? '100%;' : 'fit-content')};
`

export const InputField = styled.input<{
  width: Props['width']
  fixedWidth: Props['fixedWidth']
}>`
  display: flex;
  align-items: center;
  padding: 10px 14px;
  gap: 8px;
  border-radius: 2.5rem;
  border: none;
  color: var(--text-default);
  background-color: var(--surface-default);

  width: ${({ width, fixedWidth }) =>
    width === 'fixed' ? `${fixedWidth}px` : '100%'};
`
