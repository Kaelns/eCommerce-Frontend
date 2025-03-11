import { combineSlices, configureStore } from '@reduxjs/toolkit';

import { middlewares, extraArgument, actionsReduxExtension } from '@/app/store/config';

import { ecommerceApi } from '@/shared/api/ecommerce-api';

export interface LazyLoadedSlices {}

// * Used "slice.injectInto" for encapsulation
export const rootReducer = combineSlices(ecommerceApi).withLazyLoadedSlices<LazyLoadedSlices>();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument } }).concat(...middlewares),
  devTools: import.meta.env.DEV && {
    ...actionsReduxExtension
  }
});

export const loadStore = new Promise<typeof store>((res) => {
  setTimeout(async () => {
    res(store);
  }, 0);
});
