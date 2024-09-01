import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { PropsWithChildren } from '@/shared/types';
import { theme } from '@/features/MuiTheme/theme';

export function MuiTheme({ children }: PropsWithChildren): React.ReactNode {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        {children}
      </StyledEngineProvider>
    </ThemeProvider>
  );
}
