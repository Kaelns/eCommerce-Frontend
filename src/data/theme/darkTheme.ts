import createTheme from '@mui/material/styles/createTheme';
import { defaultTheme } from '@/data/theme/defaultTheme';

export const darkTheme = createTheme({
  ...defaultTheme,
  palette: {
    mode: 'dark'
  }
});
