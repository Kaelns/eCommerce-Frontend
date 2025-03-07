import type { CartData } from '@/entities/cart/model/types/cart.types';
import type { Cart, MyCartUpdateAction, CartPagedQueryResponse } from '@commercetools/platform-sdk';

import { ecommerceApi } from '@/shared/api/ecommerce-api/ecommerceApi.slice';

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

      // getCartById: build.query<Cart | null, { cartId: string }>({
      //   query: (queryArgs) => ({
      //     url: `${cartPath}/id`,
      //     params: queryArgs
      //   }),
      //   providesTags: (_res, _err, { cartId }) => [{ type: 'CartById', id: cartId }]
      // }),

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
                cartsArrDraft.results[cartIndex] = newCart;
              })
            );
          } catch {
            /*  */
          }
        }
      }),

      deleteCart: build.mutation<Cart, CartData>({
        query: (queryArgs) => ({
          url: cartPath,
          method: 'DELETE',
          body: queryArgs
        }),
        onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
          try {
            const { data: deletedCart } = await queryFulfilled;
            // dispatch(cartApi.util.upsertQueryData('getCartById', { cartId }, null));
            dispatch(
              cartApi.util.updateQueryData('getAllCarts', undefined, (cartsArrDraft) => {
                const cartIndex = cartsArrDraft.results.findIndex((cart) => cart.id === deletedCart.id);
                cartsArrDraft.results.splice(cartIndex, 1);
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
