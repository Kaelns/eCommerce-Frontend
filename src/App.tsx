import { Router } from '@/features/Router/Router';
import { AuthContextProvider } from '@/context/AuthContext/AuthContext';
import { ThemeProvider } from '@/features/ThemeProvider/ThemeProvider';

export function App(): React.ReactNode {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </ThemeProvider>
  );
}
