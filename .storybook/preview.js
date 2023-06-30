import styled, { ThemeProvider } from 'styled-components'

import { RecoilRoot } from 'recoil'
import { lightVariables } from '~/styles/variables'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { defaultTheme } from '~/styles/theme'
import GlobalStyle from '../src/styles/global-style'

const ContentField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ${lightVariables};
`

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <RecoilRoot>
        <GlobalStyle />
        <ContentField>
          <Story />
        </ContentField>
      </RecoilRoot>
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: {
      '768px': {
        name: 'Desktop 768px',
        styles: {
          width: '768px',
          height: '100%'
        }
      },
      '480px': {
        name: 'Desktop 480px',
        styles: {
          width: '480px',
          height: '100%'
        }
      },
      '360px': {
        name: 'Desktop 360px',
        styles: {
          width: '360px',
          height: '100%'
        }
      },
      ...INITIAL_VIEWPORTS
    }
  },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    sort: 'requiredFirst'
  }
}
