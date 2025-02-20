import type { AppData } from '@/entities/auth/model/auth.types';
import type { ResponceOk } from '@/shared/api/ecommerce-api/model/types/types';
import type { BodyUserCredentials } from '@/entities/user/model/types/user.schemas';

import { authSliceInjected } from '@/entities/auth/model/auth.slice';

import { ecommerceApi } from '@/shared/api/ecommerce-api/ecommerceApi.slice';

const authPath = '/session';

export const authApi = ecommerceApi.injectEndpoints({
  endpoints: (build) => ({
    startSession: build.query<AppData, void>({
      query: () => '/',

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(authSliceInjected.actions.setIsPendingAuthAction({ isPending: false }));
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
    })
  }),
  overrideExisting: 'throw'
});
