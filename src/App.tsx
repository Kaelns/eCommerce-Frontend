import { Experimental_CssVarsProvider as CssVarsProvider, StyledEngineProvider } from '@mui/material/styles';
// import { CssBaseline } from '@mui/material';
import { Router } from '@/features/Router/Router';
import { AuthContextProvider } from '@/context/AuthContext/AuthContext';
import { theme } from '@/data/theme/theme';

// TODO theme provider to another file

export function App(): JSX.Element {
  return (
    <CssVarsProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        {/* <CssBaseline /> */}
        <AuthContextProvider>
          <Router />
        </AuthContextProvider>
      </StyledEngineProvider>
    </CssVarsProvider>
  );
}
