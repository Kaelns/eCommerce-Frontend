import { store } from '@/app/store/store';

import { authApi } from '@/entities/auth';
import { cartApi } from '@/entities/cart';
import { categoriesApi } from '@/entities/categories';

export const prefetchStartSessionLoader = async () => {
  await store.dispatch(authApi.endpoints.startSession.initiate(undefined, { subscribe: false }));
  store.dispatch(categoriesApi.util.prefetch('getCategories', undefined, {}));
  store.dispatch(cartApi.util.prefetch('getAllCarts', undefined, {}));
  return null;
};
