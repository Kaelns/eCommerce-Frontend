import { Experimental_CssVarsProvider as CssVarsProvider, StyledEngineProvider } from '@mui/material/styles';
import { Router } from '@/features/Router/Router';
import { AuthContextProvider } from '@/context/AuthContext/AuthContext';
import { theme } from '@/data/theme/theme';

export function App(): JSX.Element {
  return (
    <CssVarsProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <AuthContextProvider>
          <Router />
        </AuthContextProvider>
      </StyledEngineProvider>
    </CssVarsProvider>
  );
}
