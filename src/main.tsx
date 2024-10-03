import '@/shared/globalInit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from '@/store/store';
import { router } from '@/router';
import { MuiTheme } from '@/features/MuiTheme/MuiTheme';
import { ContextsProvider } from '@/context/ContextsProvider';
import '@styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiTheme>
        <ContextsProvider>
          <RouterProvider router={router} />
        </ContextsProvider>
      </MuiTheme>
    </Provider>
  </React.StrictMode>
);
