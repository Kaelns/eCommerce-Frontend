import { Experimental_CssVarsProvider as CssVarsProvider, StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { PropsWithChildren } from '@/data/types/PropsWithChildren';
import { theme } from '@/features/ThemeProvider/theme/theme';

export function ThemeProvider({ children }: PropsWithChildren): React.ReactNode {
  return (
    <CssVarsProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        {children}
      </StyledEngineProvider>
    </CssVarsProvider>
  );
}
