import type { AppStore } from '@/shared/redux/redux';

import { authApi } from '@/services/ecommerce-api/rtk-query/model/authApi';
import { productApi } from '@/services/ecommerce-api/rtk-query/model/productApi';

import { store } from '@/app';

//  * That hack is to avoid cyclic dependency when we pass router to store and use store inside router
const loadStore = new Promise<AppStore>((res) => {
  setTimeout(() => res(store), 0);
});

export const startSessionLoader = () => {
  loadStore.then((store) => {
    store.dispatch(authApi.util.prefetch('startSession', undefined, {}));
    store.dispatch(productApi.util.prefetch('getCategories', undefined, {}));
  });
  return null;
};
