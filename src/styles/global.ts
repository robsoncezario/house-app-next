import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.palette.background.default};
    color: ${props => props.theme.palette.text.primary};
    font-family: ${props => props.theme.typography.fontFamily}, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: subpixel-antialiased !important;
    overflow-x: hidden;
  }
`
