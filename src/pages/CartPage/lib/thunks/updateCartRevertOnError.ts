import type { AppThunk } from '@/shared/lib/redux';
import type { SerializedError } from '@reduxjs/toolkit';
import type { RTKQueryError } from '@/shared/api/ecommerce-api';

import { isNil, isEqual } from 'lodash';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import {
  cartApi,
  revertProductsAction,
  CartUpdateActionTypes,
  createCartUpdateAction,
  selectCartIdAndVersion,
  type CartLightAllProducts
} from '@/entities/cart';

import { showAlertAction } from '@/features/Alert';

import { AlertSeverity } from '@/shared/model/data';

export const updateCartRevertOnError =
  (
    prevCartProducts: CartLightAllProducts,
    newCartProducts: CartLightAllProducts
  ): AppThunk<Promise<RTKQueryError | SerializedError | undefined>> =>
  async (dispatch, getState) => {
    if (prevCartProducts === newCartProducts || isEqual(prevCartProducts, newCartProducts)) {
      return;
    }

    const cartData = selectCartIdAndVersion(getState());
    const prevCartProductsKeys = Object.keys(prevCartProducts);

    const actions = prevCartProductsKeys
      .map((productId) => {
        const prevProduct = prevCartProducts[productId];
        const currentProduct = newCartProducts[productId];

        const { cartProductLineId } = prevProduct;

        //  * Is delete
        if (!currentProduct) {
          return createCartUpdateAction(CartUpdateActionTypes.DELETE, { cartProductLineId });
        }
        //  * Is update quantity
        if (prevProduct.quantity !== currentProduct.quantity) {
          const quantityToChange = prevProduct.quantity - currentProduct.quantity;
          if (quantityToChange > 0) {
            return createCartUpdateAction(CartUpdateActionTypes.DECREMENT, { cartProductLineId, quantityToChange });
          } else {
            return createCartUpdateAction(CartUpdateActionTypes.INCREMENT, { productId, quantityToChange: Math.abs(quantityToChange) });
          }
        }
      })
      .filter((action) => !isNil(action));

    if (actions.length) {
      const { error } = await dispatch(cartApi.endpoints.updateCart.initiate({ ...cartData, actions }));

      if (error) {
        const message = `Error while updating cart: ${getErrorMessage(error)}`;

        dispatch(showAlertAction({ severity: AlertSeverity.ERROR, message }));
        dispatch(revertProductsAction(prevCartProducts));

        return error;
      }
    }
  };
