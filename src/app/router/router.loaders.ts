import type { AppStore } from '@/shared/redux/redux';

import { authApi } from '@/services/ecommerce-api/rtk-query/model/authApi';
import { productApi } from '@/services/ecommerce-api/rtk-query/model/productApi';

import { store } from '@/app';

import { selectLanguage } from '@/shared/redux/slices/global.slice';

//  * That hack is to avoid cyclic dependency when we pass router to store and use store inside router
const loadStoreAndSession = new Promise<AppStore>((res) => {
  setTimeout(async () => {
    await store.dispatch(authApi.endpoints.startSession.initiate());
    res(store);
  }, 0);
});

export const startSessionLoader = () => {
  loadStoreAndSession.then((store) => {
    store.dispatch(productApi.util.prefetch('getCategories', undefined, {}));
  });
  return null;
};

export const prefetchCatalogPageLoader = () => {
  loadStoreAndSession.then((store) => {
    const language = selectLanguage(store.getState());
    store.dispatch(productApi.util.prefetch('getProductColors', language, {}));
  });
  return null;
};
