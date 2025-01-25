import { ecommerceApiSlice } from '@/services/ecommerce-api/redux/ecommerceApiSlice';

const usersPath = '/users';

export const usersApi = ecommerceApiSlice.injectEndpoints({
  endpoints: (build) => ({
    checkIsUserExistByEmail: build.mutation<void, { email: string }>({
      query: (body) => ({
        url: `${usersPath}/search`,
        method: 'POST',
        body
      })
    })
  }),
  overrideExisting: 'throw'
});
