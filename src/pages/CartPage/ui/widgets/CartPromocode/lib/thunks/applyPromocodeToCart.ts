import type { AppThunk } from '@/shared/lib/redux';
import type { SerializedError } from '@reduxjs/toolkit';
import type { RTKQueryError } from '@/shared/api/ecommerce-api';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import { cartApi, CartUpdateActionTypes, selectCartIdAndVersion, createCartUpdateAction } from '@/entities/cart';

import { showAlertAction } from '@/features/Alert';

import { AlertSeverity } from '@/shared/model/data';

export const applyPromocodeToCart =
  (value: string): AppThunk<Promise<RTKQueryError | SerializedError | undefined>> =>
  async (dispatch, getState) => {
    if (!value) {
      return;
    }
    const cartData = selectCartIdAndVersion(getState());
    const addPromocodeAction = createCartUpdateAction(CartUpdateActionTypes.ADD_PROMOCODE, { promocode: value })!;

    const { error } = await dispatch(cartApi.endpoints.updateCart.initiate({ ...cartData, actions: [addPromocodeAction] }));

    const messageToShow = error
      ? { message: getErrorMessage(error), severity: AlertSeverity.ERROR }
      : { message: 'The promocode has been successfully applied' };

    dispatch(showAlertAction(messageToShow));

    return error;
  };
