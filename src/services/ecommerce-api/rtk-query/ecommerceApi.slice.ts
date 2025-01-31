import { createApi } from '@reduxjs/toolkit/query/react';

import { extendedQuery } from '@/services/ecommerce-api/rtk-query/config/extendedQuery/extendedQuery';

export const ecommerceApi = createApi({
  reducerPath: 'ecommerceApi',
  baseQuery: extendedQuery,
  endpoints: () => ({})
});
