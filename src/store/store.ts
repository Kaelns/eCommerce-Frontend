import { router } from '@/features/router/router';
import { rootReducer } from '@/store/rootReducer';
import { configureStore } from '@reduxjs/toolkit';

export const extraArgument = {
  router
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument } }),
  devTools: true
});
