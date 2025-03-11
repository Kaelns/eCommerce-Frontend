import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { store } from '@/app/store/store';
import { MuiTheme } from '@/app/config/mui-theme/MuiTheme';

// * It's important to import router after store
import { router } from '@/router/router';

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
