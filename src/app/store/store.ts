import { configureStore } from '@reduxjs/toolkit';

import { router } from '@/app/router/router';

import { rootReducer, middlewares } from '@/shared/redux/redux';

export const extraArgument = {
  router
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument } }).concat(...middlewares)
});
