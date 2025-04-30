import type { AppData } from '@/entities/auth';
import type { BodyUserCredentials } from '@/entities/user';
import type { ResponceOk } from '@/shared/api/ecommerce-api';

import { ecommerceApi } from '@/shared/api/ecommerce-api';

const authPath = '/session';

export const authApi = ecommerceApi.injectEndpoints({
  endpoints: (build) => ({
    startSession: build.query<AppData, void>({
      query: () => '/'
    }),
    // * Mutations
    //  TODO Set Cart
    signUpUser: build.mutation<void, BodyUserCredentials>({
      query: (body) => ({
        url: authPath,
        method: 'POST',
        body
      })
    }),
    loginUser: build.mutation<void, { email: string; password: string }>({
      query: (body) => ({
        url: authPath,
        method: 'PUT',
        body
      })
    }),
    logoutUser: build.mutation<ResponceOk, void>({
      query: () => ({
        url: authPath,
        method: 'DELETE'
      })
    }),
    restoreUserWithRefreshToken: build.mutation<ResponceOk, void>({
      query: () => ({
        url: authPath,
        method: 'PATCH'
      })
    }),
    checkLoginStatus: build.mutation<ResponceOk, void>({
      query: () => authPath
    })
  }),
  overrideExisting: 'throw'
});
