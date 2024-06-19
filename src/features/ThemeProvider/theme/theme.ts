import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

export const theme = extendTheme({
  typography: {
    fontSize: 30,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    h1: {
      fontSize: '7rem'
    },
    h2: {
      fontSize: '3.2rem'
    }
  }
});
