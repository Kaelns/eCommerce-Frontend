import { createApi } from '@reduxjs/toolkit/query/react';

import { extendedQuery } from '@/shared/api/ecommerce-api/config/extendedQuery/extendedQuery';

export const ecommerceApi = createApi({
  reducerPath: 'ecommerceApi',
  baseQuery: extendedQuery,
  endpoints: () => ({})
});
