import { loadStore } from '@/app';

import { authApi } from '@/entities/auth';
import { cartApi } from '@/entities/cart';

export const prefetchStartSessionLoader = () => {
  loadStore.then((store) => {
    store.dispatch(authApi.util.prefetch('startSession', undefined, {}));
    store.dispatch(cartApi.util.prefetch('getAllCarts', undefined, {}));
  });
  return null;
};
