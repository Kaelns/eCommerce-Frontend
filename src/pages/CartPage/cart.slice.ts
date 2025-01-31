import type { Cart } from '@commercetools/platform-sdk';
import type { CartProducts } from '@/shared/types/types';
import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';

import { createSlice, createSelector } from '@reduxjs/toolkit';

import { MOCK_CART } from '@/services/ecommerce-api';

import { calculatePrice } from '@/pages/CartPage/helpers/numbers/calculatePrice';
import { calculateDiscountPercent } from '@/pages/CartPage/helpers/numbers/calculateDiscountPercent';
import { calculateProductsQuantity } from '@/pages/CartPage/helpers/numbers/calculateProductsQuantity';
import { convertToLightCartAllProducts } from '@/pages/CartPage/helpers/objects/convertToLightCartProducts';

import { rootReducer } from '@/shared/redux/redux';

const INIT_CART = {
  cart: MOCK_CART,
  cartProducts: {} as CartProducts,
  productQuantity: 0,
  finalPrice: 0,
  discount: 0,
  isPromocode: false,
  deletionSignal: false
};

type CartSlice = typeof INIT_CART;
type CartSliceKeys = keyof CartSlice;

const cartSliceLazy = createSlice({
  name: 'cart',
  initialState: INIT_CART,
  selectors: {
    selectCart: (state) => state.cart,
    selectDiscountCart: (state) => state.discount,
    selectIsPromocodeCart: (state) => state.isPromocode,
    selectDeletionSignalCart: (state) => state.deletionSignal,

    selectCartProducts: (state) => state.cartProducts,
    selectProductQuantityCart: (state) => state.productQuantity,
    // * Calculates automatically by create selector
    selectFinalPriceCart: createSelector([(state): CartProducts => state.cartProducts], calculatePrice)
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

    resetCartAction(state) {
      const keys = Object.keys(INIT_CART) as CartSliceKeys[];
      keys.forEach((key) => {
        (state[key] as CartSlice[CartSliceKeys]) = INIT_CART[key];
      });
    },

    setIsPromocodeAction(state, action: PayloadAction<boolean>) {
      state.isPromocode = action.payload;
    },

    deletionSignalAction(state) {
      state.deletionSignal = !state.deletionSignal;
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

export const cartSliceInjected = cartSliceLazy.injectInto(rootReducer);

declare module '@/shared/redux/redux' {
  export interface LazyLoadedSlices extends WithSlice<typeof cartSliceLazy> {}
}
