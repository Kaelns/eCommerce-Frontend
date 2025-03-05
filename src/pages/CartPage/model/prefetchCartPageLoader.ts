import { cartApi } from '@/entities/cart';

import { loadStore } from '@/app';

export const prefetchCartPageLoader = () => {
  loadStore.then((store) => {
    store.dispatch(cartApi.util.prefetch('getAllCarts', undefined, {}));
  });
  return null;
};
