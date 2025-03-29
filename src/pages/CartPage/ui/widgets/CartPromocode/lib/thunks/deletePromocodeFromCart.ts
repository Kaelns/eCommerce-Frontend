import type { AppThunk } from '@/shared/lib/redux';
import type { SerializedError } from '@reduxjs/toolkit';
import type { RTKQueryError } from '@/shared/api/ecommerce-api';

import { getErrorMessage } from '@/shared/api/ecommerce-api';

import {
  cartApi,
  CartUpdateActionTypes,
  selectCartIdAndVersion,
  createCartUpdateAction,
  selectCartDiscountCodesRefs
} from '@/entities/cart';

import { showAlertAction } from '@/features/Alert';

import { AlertSeverity } from '@/shared/model/data';

export const deletePromocodeFromCart =
  (id: string): AppThunk<Promise<RTKQueryError | SerializedError | undefined>> =>
  async (dispatch, getState) => {
    if (!id) {
      return;
    }
    const discountCodesRefs = selectCartDiscountCodesRefs(getState());
    const discountCode = discountCodesRefs.find((discountCode) => discountCode.id === id);

    if (!discountCode) {
      return;
    }

    const cartData = selectCartIdAndVersion(getState());
    const deletePromocodeAction = createCartUpdateAction(CartUpdateActionTypes.REMOVE_PROMOCODE, { discountCode })!;

    const { error } = await dispatch(cartApi.endpoints.updateCart.initiate({ ...cartData, actions: [deletePromocodeAction] }));

    const messageToShow = error
      ? { message: getErrorMessage(error), severity: AlertSeverity.ERROR }
      : { message: 'The promocode has been deleted' };

    dispatch(showAlertAction(messageToShow));

    return error;
  };
