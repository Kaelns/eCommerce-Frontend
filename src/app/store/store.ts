import type { AppStore } from '@/shared/lib/redux/redux.types';

import { configureStore } from '@reduxjs/toolkit';

import { rootReducer, middlewares, extraArgument, actionsReduxExtension } from '@/app/store/config';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument } }).concat(...middlewares),
  devTools: import.meta.env.DEV && {
    ...actionsReduxExtension
  }
});

export const loadStore = new Promise<AppStore>((res) => {
  setTimeout(async () => {
    res(store);
  }, 0);
});
