import { cartApi } from '@/entities/cart';
import { cartSlice } from '@/entities/cart/model/cart.slice';

export * from '@/entities/cart/model/types/cart.types';
export * from '@/entities/cart/model/data/cart.constants';

export { cartApi } from '@/entities/cart/api/cartApi';
export const { useGetAllCartsQuery } = cartApi;

export const { selectCartProducts, selectCartProductsIds, selectCartIdAndVersion, selectCartFinalPriceObj, selectCartProductQuantity } =
  cartSlice.selectors;

export const { clearCartAction, revertProductsAction } = cartSlice.actions;

export { createCartUpdateAction } from '@/entities/cart/api/helpers/createCartUpdateAction';

export { AddProductToCartBtn } from '@/entities/cart/ui/AddProductToCartBtn';
export { CartUpdateActionTypes } from '@/entities/cart/model/data/cart.enums';
export { CartProductCard } from '@/entities/cart/ui/CartProductCard/CartProductCard';
