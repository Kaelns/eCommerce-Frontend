import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { store, router } from '@/app';
import { MuiTheme } from '@/app/config/mui-theme/MuiTheme';
import '@/app/styles/index.scss';

// * Define global if it's undefined
window.global ||= window;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MuiTheme>
        {/* TODO : Add fallbackElement={<PageSkeleton />} to RouterProvider */}
        <RouterProvider router={router} /* fallbackElement={<PageSkeleton />} */ />
      </MuiTheme>
    </Provider>
  </StrictMode>
);
