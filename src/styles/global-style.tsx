import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle<{}>`
  *, *::before, *::after {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    margin: 0;
    overflow: hidden;
  }
`

export default GlobalStyle
