import { store } from '@/app';

import { productApi } from '@/entities/product';
import { selectLanguage } from '@/entities/user';

export const prefetchCatalogPageLoader = async () => {
  const language = selectLanguage(store.getState());
  store.dispatch(productApi.util.prefetch('getProductColors', language, {}));
  return null;
};
