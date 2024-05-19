import { ThemeProvider } from '@emotion/react';
import { Router } from '@/features/Router/Router';
import { lightTheme } from '@/data/theme/lightTheme';
import { AuthContextProvider } from '@/context/AuthContext/AuthContext';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={lightTheme}>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </ThemeProvider>
  );
}
