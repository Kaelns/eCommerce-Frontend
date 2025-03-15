import { configureStore } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
import { router } from '@/app/router/router';

import { actionsEcommerceReduxExtension } from '@/shared/api/ecommerce-api';

import { rootReducer, dynamicMiddleware } from '@/shared/lib/redux';

export const extraArgument = {
  router
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: { extraArgument } }).concat(dynamicMiddleware.middleware),
  devTools: import.meta.env.DEV && {
    actionCreators: { ...actionsEcommerceReduxExtension }
  }
});
