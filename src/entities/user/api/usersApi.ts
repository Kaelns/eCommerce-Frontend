import { ecommerceApi } from '@/shared/api/ecommerce-api';

const usersPath = '/users';

/* const usersApi =  */ ecommerceApi.injectEndpoints({
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
