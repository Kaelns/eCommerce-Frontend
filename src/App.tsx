import { ThemeProvider } from '@emotion/react';
import { Router } from '@/features/Router/Router';
import { lightTheme } from '@/data/theme/lightTheme';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router />
    </ThemeProvider>
  );
}
