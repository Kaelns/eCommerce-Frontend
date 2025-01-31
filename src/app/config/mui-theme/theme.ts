/* eslint-disable @typescript-eslint/naming-convention */
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// * MUI uses the mobile first methodology

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    zero: true;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
    laptopBig: true;
  }
}

export const theme = responsiveFontSizes(
  createTheme({
    cssVariables: true,
    spacing: (factor: number) => `${factor}rem`,
    typography: {
      fontSize: 28,
      fontFamily: ['-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'].join(','),
      h1: {
        fontSize: '7rem'
      },
      h2: {
        fontSize: '3.2rem'
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        zero: 0,
        mobile: 375,
        tablet: 768,
        laptop: 1024,
        laptopBig: 1300,
        desktop: 1440
      }
    },
    components: {
      MuiStack: {
        defaultProps: {
          useFlexGap: true
        }
      }
    }
  })
);
