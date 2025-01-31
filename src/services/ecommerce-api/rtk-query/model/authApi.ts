import type { BodyUserCredentials } from '@/shared/zod/ecommerce/user.schemas';
import type { AppData, ResponceOk } from '@/services/ecommerce-api/rtk-query/types/types';

import { ecommerceApi } from '@/services/ecommerce-api/rtk-query/ecommerceApi.slice';

import { setIsPendingAuthAction } from '@/shared/redux/slices/auth.slice';

const authPath = '/session';

export const authApi = ecommerceApi.injectEndpoints({
  endpoints: (build) => ({
    startSession: build.query<AppData, void>({
      query: () => '/',

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(setIsPendingAuthAction({ isPending: false }));
        } catch (error) {
          // * Handled by baseQueryExtended
        }
      }
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
    }),
    //  FIXME delete
    someStuff: build.mutation<{ data: string }, void>({
      queryFn: (_arg, queryApi, _extraOptions, _baseQuery) => {
        console.log(queryApi);
        return { data: { data: 'some data' } };
      }
    })
  }),
  overrideExisting: 'throw'
});
