import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import { rootReducer, middlewares } from '@/shared/redux';
import { router } from '@/app/router/router';

export const extraArgument = {
  router
};

export const listenerMiddleware = createListenerMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: { extraArgument } })
      .prepend(listenerMiddleware.middleware)
      .concat(...middlewares)
});
