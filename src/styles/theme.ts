import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c0212e',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#c0212e'
    },
    background: {
      default: '#fff',
      paper: '#f5f5f5'
    },
    text: {
      primary: 'rgb(34, 34, 34)',
      secondary: 'rgb(64, 64, 64)',
      disabled: 'rgb(113, 113, 113)',
      hint: 'rgb(94, 94, 94)'
    },
    shadow: {
      main: 'rgba(0, 0, 0, .08)'
    }
  },

  typography: {
    fontFamily: "'IBM Plex Sans'",
  }
});

export default theme;