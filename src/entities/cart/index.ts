import { cartApi } from '@/entities/cart/api/cartApi';
import { cartSlice } from '@/entities/cart/model/cart.slice';

export * from '@/entities/cart/model/types/cart.types';
export * from '@/entities/cart/model/types/cart.schemas';
export * from '@/entities/cart/model/data/cart.constants';

export { cartApi };
export const { useGetAllCartsQuery } = cartApi;

export { calculatePrice } from '@/entities/cart/lib/helpers/numbers/calculatePrice';
export { calculateDiscountPercent } from '@/shared/lib/utils/numbers/calculateDiscountPercent';
export { calculateProductsQuantity } from '@/entities/cart/lib/helpers/numbers/calculateProductsQuantity';
export { convertToLightCartAllProducts } from '@/entities/cart/lib/helpers/objects/convertToLightCartAllProducts';

export const {
  selectCartProducts,
  selectDiscountCart,
  selectFinalPriceCart,
  selectCartProductById,
  selectIsPromocodeCart,
  selectCartProductLineId,
  selectProductQuantityCart
} = cartSlice.selectors;

export const {
  resetCartAction,
  setCartDataAction,
  setQuantityAction,
  deleteProductAction,
  setIsPromocodeAction,
  decrementQuantityAction,
  incrementQuantityAction
} = cartSlice.actions;
