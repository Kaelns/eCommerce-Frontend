import { authApi } from '@/entities/auth';
import { categoriesApi } from '@/entities/categories';

import { loadStore } from '@/app/store/store';

export const prefetchStartSessionLoader = () => {
  loadStore.then(async (store) => {
    await store.dispatch(authApi.endpoints.startSession.initiate(undefined, { subscribe: false }));
    store.dispatch(categoriesApi.util.prefetch('getCategories', undefined, {}));
  });
  return null;
};
