import { configureStore } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
// import { router } from '@/app/router/router';

import { authApiActions } from '@/entities/auth';

import { rootReducer, dynamicMiddleware } from '@/shared/lib/redux';

export const extraArgument = {
  // TODO resolve router import without dependency cycle through third party interface
  // router
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument } }).concat(dynamicMiddleware.middleware),
  devTools: import.meta.env.DEV && {
    actionCreators: { ...authApiActions }
  }
});
