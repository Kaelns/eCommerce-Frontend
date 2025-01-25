import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from '@/app';
import { router } from '@/app';
import { Provider } from 'react-redux';
import { MuiTheme } from '@/app/config/mui-theme/MuiTheme';
import { RouterProvider } from 'react-router-dom';
import '@/app/styles/index.scss';

// * Define global if it's undefined
window.global ||= window;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiTheme>
        {/* TODO : Add fallbackElement={<PageSkeleton />} to RouterProvider */}
        <RouterProvider router={router} /* fallbackElement={<PageSkeleton />} */ />
      </MuiTheme>
    </Provider>
  </React.StrictMode>
);
