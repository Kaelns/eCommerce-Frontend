import { Provider } from 'react-redux';
import { Router } from '@/features/Router/Router';
import { MuiTheme } from '@/features/MuiTheme/MuiTheme';
import { ContextsProvider } from '@/context/ContextsProvider';
import { store } from '@/store/store';

export function App(): React.ReactNode {
  return (
    <Provider store={store}>
      <MuiTheme>
        <ContextsProvider>
          <Router />
        </ContextsProvider>
      </MuiTheme>
    </Provider>
  );
}
