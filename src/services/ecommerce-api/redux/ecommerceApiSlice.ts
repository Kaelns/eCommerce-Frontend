import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryExtended } from '@/services/ecommerce-api/redux/config/baseQueryExtended/baseQueryExtended';

export const reducerPath = 'ecommerceApi';
export const ecommerceApiSlice = createApi({
  reducerPath,
  baseQuery: baseQueryExtended,
  endpoints: () => ({})
});
