import { loadStore } from '@/app/store/store';

import { authApi } from '@/entities/auth';

export const prefetchStartSessionLoader = () => {
  loadStore.then(async (store) => {
    store.dispatch(authApi.util.prefetch('startSession', undefined, {}));
  });
  return null;
};
