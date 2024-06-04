import { Router } from '@/features/Router/Router';
import { ThemeProvider } from '@/features/ThemeProvider/ThemeProvider';
import { ContextsProvider } from '@/context/ContextsProvider';

export function App(): React.ReactNode {
  return (
    <ThemeProvider>
      <ContextsProvider>
        <Router />
      </ContextsProvider>
    </ThemeProvider>
  );
}
