import { productApi } from '@/entities/product';
import { selectLanguage } from '@/entities/user';

import { loadStore } from '@/app';

export const prefetchCatalogPageLoader = () => {
  loadStore.then((store) => {
    const language = selectLanguage(store.getState());
    store.dispatch(productApi.util.prefetch('getProductColors', language, {}));
  });
  return null;
};
