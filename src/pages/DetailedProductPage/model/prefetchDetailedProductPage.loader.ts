import type { LoaderFunction } from 'react-router-dom';

import { redirect } from 'react-router-dom';

import { store } from '@/app';

import { productApi } from '@/entities/product';

import { Paths } from '@/shared/model/data';

export const prefetchDetailedProductPage: LoaderFunction = async ({ params }) => {
  const productKey = params.id;

  if (!productKey) {
    return redirect(Paths.ERROR);
  }

  store.dispatch(productApi.util.prefetch('getProductByKey', productKey, {}));
  return { productKey };
};
