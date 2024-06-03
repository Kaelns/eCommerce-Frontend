import { Router } from '@/features/Router/Router';
import { AuthContextProvider } from '@/context/AuthContext/AuthContext';
import { ThemeProvider } from '@/features/ThemeProvider/ThemeProvider';
import { FilterReducerContextProvider } from '@/context/FilterReducerContext/FilterReducerContext';

export function App(): React.ReactNode {
  return (
    <ThemeProvider>
      <AuthContextProvider>
        <FilterReducerContextProvider>
          <Router />
        </FilterReducerContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}
