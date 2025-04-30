import type { AppThunk } from '@/shared/lib/redux';
import type { SerializedError } from '@reduxjs/toolkit';
import type { RTKQueryError } from '@/shared/api/ecommerce-api';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import { cartApi } from '@/entities/cart/api/cartApi';
import { selectCartIdAndVersion } from '@/entities/cart/model/cart.slice';
import { CartUpdateActionTypes } from '@/entities/cart/model/data/cart.enums';
import { createCartUpdateAction } from '@/entities/cart/api/helpers/createCartUpdateAction';

import { showAlertAction } from '@/features/Alert';

import { AlertSeverity } from '@/shared/model/data';

export const addOrRemoveProductCart =
  (productId: string, cartProductLineId: string | undefined): AppThunk<Promise<RTKQueryError | SerializedError | undefined>> =>
  async (dispatch, getState) => {
    if (!productId) {
      return;
    }
    const cartData = selectCartIdAndVersion(getState());

    const isInCart = !!cartProductLineId;

    const action = isInCart
      ? createCartUpdateAction(CartUpdateActionTypes.DELETE, { cartProductLineId })!
      : createCartUpdateAction(CartUpdateActionTypes.INCREMENT, { productId })!;

    const { error } = await dispatch(cartApi.endpoints.updateCart.initiate({ ...cartData, actions: [action] }));

    if (error) {
      dispatch(showAlertAction({ severity: AlertSeverity.ERROR, message: `Error while adding to the cart: ${getErrorMessage(error)}` }));

      return error;
    }
  };
