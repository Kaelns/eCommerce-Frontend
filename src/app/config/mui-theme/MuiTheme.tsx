import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import type { PropsWithChildren } from '@/shared/types/types';
import { theme } from '@/app/config/mui-theme/theme';

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
