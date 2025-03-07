import { cartApi } from '@/entities/cart/api/cartApi';
import { cartSlice } from '@/entities/cart/model/cart.slice';

export * from '@/entities/cart/model/types/cart.types';
export * from '@/entities/cart/model/types/cart.schemas';
export * from '@/entities/cart/model/data/cart.constants';

export { cartApi };
export const { useGetAllCartsQuery, useUpdateCartMutation } = cartApi;

export { CartUpdateActionTypes } from '@/entities/cart/model/data/cart.enums';
export { calculateDiscountPercent } from '@/shared/lib/utils/numbers/calculateDiscountPercent';
export { createCartUpdateAction } from '@/entities/cart/lib/helpers/objects/createCartUpdateAction';
export { calculateFinalCartPrice as calculatePrice } from '@/entities/cart/lib/helpers/numbers/calculateFinalCartPrice';
export { calculateCartProductsQuantity as calculateProductsQuantity } from '@/entities/cart/lib/helpers/numbers/calculateCartProductsQuantity';

export const {
  selectCartProducts,
  selectCartDiscount,
  selectCartProductById,
  selectCartProductsIds,
  selectCartIsPromocode,
  selectCartIdAndVersion,
  selectCartFinalPriceObj,
  selectCartProductLineId,
  selectCartProductQuantity
} = cartSlice.selectors;

export const {
  clearCartAction,
  setCartDataAction,
  setQuantityAction,
  deleteProductAction,
  decrementQuantityAction,
  incrementQuantityAction,
  setCartIsPromocodeAction
} = cartSlice.actions;
