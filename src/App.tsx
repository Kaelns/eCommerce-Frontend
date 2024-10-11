import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from '@/store/store';
import { router } from '@/features/router/router';
import { MuiTheme } from '@/features/mui-theme/MuiTheme';
import '@styles/index.scss';

export function App(): React.ReactNode {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <MuiTheme>
          <RouterProvider router={router} />
        </MuiTheme>
      </Provider>
    </React.StrictMode>
  );
}
