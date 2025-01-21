// import { router } from '@/features/router/router';
import { middlewares, rootReducer } from '@/shared/redux';
import { configureStore } from '@reduxjs/toolkit';

export const extraArgument = {
  // router
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument } }).concat(...middlewares)
});
