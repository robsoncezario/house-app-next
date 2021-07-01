/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module "@material-ui/core/styles/createPalette" {
  export interface PaletteOptions {
    shadow?: {
      main?: string;
    }
  }
}