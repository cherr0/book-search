import { css } from 'styled-components'

export const commonVariables = css`
  --text-default: #000000;
  --surface-default: #f7f7f5;
`

export const lightVariables = css`
  ${commonVariables};
`

export const darkVariables = css`
  ${commonVariables};
`
