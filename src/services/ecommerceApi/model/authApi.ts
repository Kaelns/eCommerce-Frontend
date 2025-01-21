import { ecommerceApiSlice } from '@/services/ecommerceApi';
import type { IAppData, IBodyUserCredentials } from '@/shared/types/types';

export const authApi = ecommerceApiSlice.injectEndpoints({
  endpoints: (build) => ({
    startSession: build.query<IAppData, void>({
      query: () => '/'
    }),
    // * Mutations
    signUpUser: build.mutation<void, IBodyUserCredentials>({
      query: (body) => ({
        url: '/session',
        method: 'POST',
        body
      })
    }),
    loginUser: build.mutation<void, { email: string; password: string }>({
      query: (body) => ({
        url: '/session',
        method: 'PUT',
        body
      })
    }),
    logoutUser: build.mutation({
      query: () => ({
        url: '/session',
        method: 'DELETE'
      })
    }),
    checkLoginStatus: build.mutation({
      query: () => ({
        url: '/session',
        method: 'GET'
      })
    })
  }),
  overrideExisting: 'throw'
});
