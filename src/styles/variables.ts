import { css } from 'styled-components'

export const commonVariables = css`
  --text-default: #000000;
  --text-weak: #666d77;
  --surface-default: #f7f7f5;
  --border-default: #e2e8f0;
  --border-strong: #000000;
`

export const lightVariables = css`
  ${commonVariables};
`

export const darkVariables = css`
  ${commonVariables};
`
