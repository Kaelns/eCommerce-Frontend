import type { EcommerceBaseQuery } from '@/services/ecommerce-api/rtk-query/types/types';

import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const baseQuery: EcommerceBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_URL,
  credentials: 'include'
});
