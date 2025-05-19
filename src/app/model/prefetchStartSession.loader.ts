import { store } from '@/app/store/store';

import { authApi } from '@/entities/auth';
import { cartApi } from '@/entities/cart';

export const prefetchStartSessionLoader = async () => {
  await store.dispatch(authApi.endpoints.startSession.initiate(undefined, { subscribe: false }));
  store.dispatch(cartApi.util.prefetch('getAllCarts', undefined, {}));
  return null;
};
