import type { Cart } from '@commercetools/platform-sdk';
import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CartProducts } from '@/entities/cart/model/types/cart.types';

import { createSlice, createSelector } from '@reduxjs/toolkit';

import { calculatePrice } from '@/entities/cart/lib/helpers/numbers/calculatePrice';
import { getPromocodeData } from '@/entities/cart/lib/helpers/boolean/getPromocodeData';
import { calculateProductsQuantity } from '@/entities/cart/lib/helpers/numbers/calculateProductsQuantity';
import { convertToLightCartAllProducts } from '@/entities/cart/lib/helpers/objects/convertToLightCartAllProducts';

import { rootReducer } from '@/app/store/config';

const INIT_CART = {
  id: '',
  version: 0,

  cartProductsIds: [] as string[],
  cartProducts: {} as CartProducts,
  cartProductsQuantity: 0,

  finalPrice: 0,
  isPromocode: false,
  discount: 0

  // deletionSignal: false
};

const cartSliceLazy = createSlice({
  name: 'cart',
  initialState: INIT_CART,
  selectors: {
    selectCartIdAndVersion: (state) => ({ id: state.id, version: state.version }),

    selectCartProducts: (state) => state.cartProducts,
    selectCartProductById: (state, productId) => state.cartProducts[productId],
    selectCartProductLineId: (state, productId) => state.cartProducts[productId]?.lineId,

    selectProductQuantityCart: (state) => state.cartProductsQuantity,
    selectDiscountCart: (state) => state.discount,
    selectIsPromocodeCart: (state) => state.isPromocode,
    // selectDeletionSignalCart: (state) => state.deletionSignal,

    selectFinalPriceCart: createSelector([(state): CartProducts => state.cartProducts, (_state, language) => language], calculatePrice)
  },
  reducers: {
    setCartDataAction(state, action: PayloadAction<Cart>) {
      const cart = action.payload;
      const { isPromocode, discount } = getPromocodeData(cart);
      const rawCartProducts = cart.lineItems;

      state.id = cart.id;
      state.version = cart.version;
      state.cartProducts = convertToLightCartAllProducts(rawCartProducts);
      state.cartProductsIds = Object.keys(state.cartProducts);
      state.cartProductsQuantity = calculateProductsQuantity(rawCartProducts);
      state.discount = discount;
      state.isPromocode = isPromocode;
    },

    setIsPromocodeAction(state, action: PayloadAction<boolean>) {
      state.isPromocode = action.payload;
    },

    // deletionSignalAction(state) {
    //   state.deletionSignal = !state.deletionSignal;
    // },

    resetCartAction() {
      return INIT_CART;
    },

    // * Cart Products

    incrementQuantityAction(state, action: PayloadAction<{ productId: string }>) {
      const { productId } = action.payload;
      const { maxQuantity, quantity } = state.cartProducts[productId];
      if (quantity < maxQuantity) {
        state.cartProducts[productId].quantity += 1;
        state.cartProductsQuantity += 1;
      }
    },

    decrementQuantityAction(state, action: PayloadAction<{ productId: string }>) {
      const { productId } = action.payload;
      const { quantity } = state.cartProducts[productId];
      if (quantity > 1) {
        state.cartProducts[productId].quantity -= 1;
        state.cartProductsQuantity -= 1;
      }
    },

    setQuantityAction(state, action: PayloadAction<{ productId: string; newQuantity: number }>) {
      const { productId, newQuantity } = action.payload;
      const { maxQuantity, quantity } = state.cartProducts[productId];
      // FIXME check newQuantity + quantity
      if (newQuantity > 1 && newQuantity <= maxQuantity) {
        state.cartProducts[productId].quantity = newQuantity;
        state.cartProductsQuantity = state.cartProductsQuantity - quantity + newQuantity;
      }
    },

    deleteProductAction(state, action: PayloadAction<{ productId: string }>) {
      const { productId } = action.payload;
      const { quantity } = state.cartProducts[productId];
      state.cartProductsQuantity -= quantity;
      delete state.cartProducts[productId];
      state.cartProductsIds = state.cartProductsIds.filter((id) => id !== productId);
    }
  }
});

export const cartSlice = cartSliceLazy.injectInto(rootReducer);

declare module '@/app/store/config' {
  export interface LazyLoadedSlices extends WithSlice<typeof cartSliceLazy> {}
}
