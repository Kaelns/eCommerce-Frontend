import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { store, router, MuiTheme } from '@/app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MuiTheme>
        <RouterProvider router={router} />
      </MuiTheme>
    </Provider>
  </StrictMode>
);
