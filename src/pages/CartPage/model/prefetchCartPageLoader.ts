import { loadStore } from '@/app/store/store';

import { cartApi } from '@/entities/cart';

export const prefetchCartPageLoader = () => {
  loadStore.then((store) => {
    store.dispatch(cartApi.util.prefetch('getAllCarts', undefined, {}));
  });
  return null;
};
