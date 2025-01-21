import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const ecommerceApiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: 'include'
  }),
  endpoints: () => ({})
});
