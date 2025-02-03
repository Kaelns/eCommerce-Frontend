import type { PropsWithChildren } from '@/shared/types/types';

import { CssBaseline } from '@mui/material';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import { theme } from '@/app/config/mui-theme/theme';

export function MuiTheme({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        {children}
      </StyledEngineProvider>
    </ThemeProvider>
  );
}
