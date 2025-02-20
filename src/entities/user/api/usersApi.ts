import { ecommerceApi } from '@/shared/api/ecommerce-api/ecommerceApi.slice';

const usersPath = '/users';

export const usersApi = ecommerceApi.injectEndpoints({
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
