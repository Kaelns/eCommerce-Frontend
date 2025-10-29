import type { WithSlice } from '@reduxjs/toolkit';

import { createApi } from '@reduxjs/toolkit/query/react';

import { extendedQuery } from '@/shared/api/ecommerce-api/config/extendedQuery/extendedQuery';

import { rootReducer, dynamicMiddleware } from '@/shared/lib/redux';

export const ecommerceApi = createApi({
  reducerPath: 'ecommerceApi',
  baseQuery: extendedQuery,
  endpoints: () => ({})
});

rootReducer.inject(ecommerceApi);
dynamicMiddleware.addMiddleware(ecommerceApi.middleware);

declare module '@/shared/lib/redux/redux.config' {
  export interface LazyLoadedSlices extends WithSlice<typeof ecommerceApi> {}
}
