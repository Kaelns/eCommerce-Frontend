import { loadStore } from '@/app/store/store';

import { productApi } from '@/entities/product';
import { selectLanguage } from '@/entities/user';

export const prefetchCatalogPageLoader = () => {
  loadStore.then((store) => {
    const language = selectLanguage(store.getState());
    store.dispatch(productApi.util.prefetch('getProductColors', language, {}));
  });
  return null;
};
