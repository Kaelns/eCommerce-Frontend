import type { CartProducts } from '@/entities/cart';
import type { Cart } from '@commercetools/platform-sdk';
import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';

import { createSlice, createSelector } from '@reduxjs/toolkit';

import {
  MOCK_CART,
  calculatePrice,
  calculateDiscountPercent,
  calculateProductsQuantity,
  convertToLightCartAllProducts
} from '@/entities/cart';

import { rootReducer } from '@/app/store/config';

const INIT_CART = {
  cart: MOCK_CART,
  cartProducts: {} as CartProducts,
  productQuantity: 0,
  finalPrice: 0,
  discount: 0,
  isPromocode: false,
  deletionSignal: false
};

const cartSliceLazy = createSlice({
  name: 'cart',
  initialState: INIT_CART,
  selectors: {
    selectCart: (state) => state.cart,

    selectCartProducts: (state) => state.cartProducts,
    selectProductQuantityCart: (state) => state.productQuantity,
    selectDiscountCart: (state) => state.discount,
    selectIsPromocodeCart: (state) => state.isPromocode,
    selectDeletionSignalCart: (state) => state.deletionSignal,

    selectFinalPriceCart: createSelector([(state): CartProducts => state.cartProducts], calculatePrice),

    selectCartProductId: createSelector(
      [(state): CartProducts => state.cartProducts, (_, productId: string) => productId],
      (cartProducts, productId) => cartProducts[productId]?.lineId
    )
  },
  reducers: {
    setCartAction(state, action: PayloadAction<Cart>) {
      const { discountOnTotalPrice, discountCodes, directDiscounts } = action.payload;
      const discountInMoney = discountOnTotalPrice?.discountedAmount?.centAmount ?? 0;

      state.cart = action.payload;
      state.cartProducts = convertToLightCartAllProducts(action.payload.lineItems);
      state.productQuantity = calculateProductsQuantity(action.payload.lineItems);
      state.discount = calculateDiscountPercent(action.payload.totalPrice.centAmount, discountInMoney);
      state.isPromocode = discountCodes.length > 0 || directDiscounts.length > 0;
    },

    setIsPromocodeAction(state, action: PayloadAction<boolean>) {
      state.isPromocode = action.payload;
    },

    deletionSignalAction(state) {
      state.deletionSignal = !state.deletionSignal;
    },

    resetCartAction() {
      return INIT_CART;
    },

    incrementQuantityAction(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      const { maxQuantity, quantity } = state.cartProducts[id];
      if (quantity < maxQuantity) {
        state.cartProducts[id].quantity += 1;
        state.productQuantity += 1;
      }
    },

    decrementQuantityAction(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      const { quantity } = state.cartProducts[id];
      if (quantity > 1) {
        state.cartProducts[id].quantity -= 1;
        state.productQuantity -= 1;
      }
    },

    setQuantityAction(state, action: PayloadAction<{ id: string; newQuantity: number }>) {
      const { id, newQuantity } = action.payload;
      const { maxQuantity, quantity } = state.cartProducts[id];
      // FIXME check newQuantity + quantity
      if (newQuantity > 1 && newQuantity + quantity <= maxQuantity) {
        state.cartProducts[id].quantity = newQuantity;
        state.productQuantity = state.productQuantity - quantity + newQuantity;
      }
    },

    deleteProductAction(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      const { quantity } = state.cartProducts[id];
      state.productQuantity -= quantity;
      delete state.cartProducts[id];
    }
  }
});

export const cartSlice = cartSliceLazy.injectInto(rootReducer);

declare module '@/app/store/config' {
  export interface LazyLoadedSlices extends WithSlice<typeof cartSliceLazy> {}
}

export const {
  selectCart,
  selectCartProducts,
  selectDiscountCart,
  selectCartProductId,
  selectFinalPriceCart,
  selectIsPromocodeCart,
  selectDeletionSignalCart,
  selectProductQuantityCart
} = cartSlice.selectors;

export const {
  setCartAction,
  resetCartAction,
  setQuantityAction,
  deleteProductAction,
  setIsPromocodeAction,
  deletionSignalAction,
  decrementQuantityAction,
  incrementQuantityAction
} = cartSlice.actions;
