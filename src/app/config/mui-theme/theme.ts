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
      fontSize: 28, // * 1rem = 10px
      fontFamily: ['Hauss', 'Segoe UI', '-apple-system', 'Roboto', 'Arial', 'sans-serif'].join(','),
      // * Same as default + 2px (16px + 2px = 18px = 1.8rem)
      h1: { fontSize: '6rem' },
      h2: { fontSize: '2.6rem' },
      h3: { fontSize: '2.07rem' },
      h4: { fontSize: '1.8rem' },
      h5: { fontSize: '1.53rem' },
      h6: { fontSize: '1.27rem' },
      body1: { fontSize: '1.8rem' }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        zero: 0,
        mobile: 435,
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
