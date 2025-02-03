import { cartSliceInjected } from '@/pages/CartPage/cart.slice';

export { CartPage } from '@/pages/CartPage/CartPage';

export const {
  selectCart,
  selectCartProducts,
  selectDiscountCart,
  selectCartProductId,
  selectFinalPriceCart,
  selectIsPromocodeCart,
  selectDeletionSignalCart,
  selectProductQuantityCart
} = cartSliceInjected.selectors;

export const {
  setCartAction,
  resetCartAction,
  setQuantityAction,
  deleteProductAction,
  setIsPromocodeAction,
  deletionSignalAction,
  decrementQuantityAction,
  incrementQuantityAction
} = cartSliceInjected.actions;
