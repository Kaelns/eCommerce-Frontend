import { Provider } from 'react-redux';
import { Router } from '@/features/Router/Router';
import { ThemeProvider } from '@/features/ThemeProvider/ThemeProvider';
import { ContextsProvider } from '@/context/ContextsProvider';
import { store } from '@/store/store';

export function App(): React.ReactNode {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ContextsProvider>
          <Router />
        </ContextsProvider>
      </ThemeProvider>
    </Provider>
  );
}
