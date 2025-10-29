import type { ResponceOk } from '@/shared/api/ecommerce-api';
import type { CartData } from '@/entities/cart/model/types/cart.types';
import type { Cart, MyCartUpdateAction, CartPagedQueryResponse } from '@commercetools/platform-sdk';

import { ecommerceApi } from '@/shared/api/ecommerce-api';

const cartPath = '/cart';

export const cartApi = ecommerceApi
  .enhanceEndpoints({
    addTagTypes: ['Carts', 'CartById']
  })
  .injectEndpoints({
    endpoints: (build) => ({
      getAllCarts: build.query<CartPagedQueryResponse, void>({
        query: () => cartPath,
        providesTags: ['Carts']
      }),

      // * Mutations

      createCart: build.mutation<Cart, void>({
        query: () => ({
          url: cartPath,
          method: 'POST'
        }),
        onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
          // * Pessimistic update
          try {
            const { data: newCart } = await queryFulfilled;
            dispatch(
              cartApi.util.updateQueryData('getAllCarts', undefined, (cartsArrDraft) => {
                cartsArrDraft.results.push(newCart);
              })
            );
          } catch {
            /*  */
          }
        }
      }),

      updateCart: build.mutation<Cart, { actions: MyCartUpdateAction[] } & CartData>({
        query: (body) => ({
          url: cartPath,
          method: 'PATCH',
          body: body
        }),
        onQueryStarted: async ({ cartId }, { dispatch, queryFulfilled }) => {
          try {
            const { data: newCart } = await queryFulfilled;
            // dispatch(cartApi.util.upsertQueryData('getCartById', { cartId }, newCart));
            dispatch(
              cartApi.util.updateQueryData('getAllCarts', undefined, (cartsArrDraft) => {
                const cartIndex = cartsArrDraft.results.findIndex((cart) => cart.id === cartId);
                if (cartIndex > 0) {
                  cartsArrDraft.results[cartIndex] = newCart;
                }
              })
            );
          } catch {
            /*  */
          }
        }
      }),

      deleteCart: build.mutation<ResponceOk, CartData>({
        query: (queryArgs) => ({
          url: cartPath,
          method: 'DELETE',
          body: queryArgs
        }),
        onQueryStarted: async ({ cartId }, { dispatch, queryFulfilled }) => {
          try {
            await queryFulfilled;
            // dispatch(cartApi.util.upsertQueryData('getCartById', { cartId }, null));
            dispatch(
              cartApi.util.updateQueryData('getAllCarts', undefined, (cartsArrDraft) => {
                const cartIndex = cartsArrDraft.results.findIndex((cart) => cart.id === cartId);
                if (cartIndex > 0) {
                  cartsArrDraft.results.splice(cartIndex, 1);
                }
              })
            );
          } catch {
            /*  */
          }
        }
      })
    }),
    overrideExisting: 'throw'
  });

export const { useGetAllCartsQuery } = cartApi;
