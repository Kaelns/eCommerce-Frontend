import { configureStore } from '@reduxjs/toolkit';

import { router } from '@/app/router/router';

import { rootReducer, middlewares } from '@/shared/redux/redux';
import { actionsReduxExtension } from '@/shared/redux/actionsReduxExtension';

export const extraArgument = {
  router
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument } }).concat(...middlewares),
  devTools: import.meta.env.DEV && {
    ...actionsReduxExtension
  }
});
