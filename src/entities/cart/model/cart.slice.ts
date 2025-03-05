import type { Cart } from '@commercetools/platform-sdk';
import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CartLight, CartLightAllProducts } from '@/entities/cart/model/types/cart.types';

import { isEqual } from 'lodash';
import { createSlice, createSelector } from '@reduxjs/toolkit';

import { cartApi } from '@/entities/cart/api/cartApi';
import { convertCart } from '@/entities/cart/lib/helpers/objects/convertCart';
import { calculateFinalCartPrice } from '@/entities/cart/lib/helpers/numbers/calculateFinalCartPrice';

import { rootReducer } from '@/app/store/config';

const INIT_CART: CartLight = {
  id: '',
  version: 0,

  products: {} as CartLightAllProducts,
  productsIds: [] as string[],
  productsQuantity: 0,

  discount: 0,
  isPromocode: false
};

const cartSliceLazy = createSlice({
  name: 'cart',
  initialState: INIT_CART,
  selectors: {
    selectCartIdAndVersion: (state) => ({ cartId: state.id, version: state.version }),

    selectCartProducts: (state) => state.products,
    selectCartProductsIds: (state) => state.productsIds,
    selectCartProductById: (state, productId) => state.products[productId],
    selectCartProductLineId: (state, productId) => state.products[productId]?.lineId,

    selectCartProductQuantity: (state) => state.productsQuantity,
    selectCartDiscount: (state) => state.discount,
    selectCartIsPromocode: (state) => state.isPromocode,

    selectCartFinalPriceObj: createSelector(
      [(state): CartLightAllProducts => state.cartProducts, (_state, language) => language],
      calculateFinalCartPrice
    )
  },
  reducers: {
    setCartDataAction(_state, action: PayloadAction<Cart>) {
      return convertCart(action.payload);
    },

    setCartIsPromocodeAction(state, action: PayloadAction<boolean>) {
      state.isPromocode = action.payload;
    },

    resetCartAction() {
      return INIT_CART;
    },

    // * Cart Products Actions

    incrementQuantityAction(state, action: PayloadAction<{ productId: string }>) {
      const { productId } = action.payload;
      const { maxQuantity, quantity } = state.products[productId];
      if (quantity < maxQuantity) {
        state.products[productId].quantity += 1;
        state.productsQuantity += 1;
      }
    },

    decrementQuantityAction(state, action: PayloadAction<{ productId: string }>) {
      const { productId } = action.payload;
      const { quantity } = state.products[productId];
      if (quantity > 1) {
        state.products[productId].quantity -= 1;
        state.productsQuantity -= 1;
      }
    },

    setQuantityAction(state, action: PayloadAction<{ productId: string; newQuantity: number }>) {
      const { productId, newQuantity } = action.payload;
      const { maxQuantity, quantity } = state.products[productId];
      if (newQuantity > 1 && newQuantity <= maxQuantity) {
        state.products[productId].quantity = newQuantity;
        state.productsQuantity = state.productsQuantity - quantity + newQuantity;
      }
    },

    deleteProductAction(state, action: PayloadAction<{ productId: string }>) {
      const { productId } = action.payload;
      const { quantity } = state.products[productId];
      state.productsQuantity -= quantity;
      delete state.products[productId];
      state.productsIds = state.productsIds.filter((id) => id !== productId);
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(cartApi.endpoints.getAllCarts.matchFulfilled, (state, action) => {
      const cart = action.payload.results.find((cart) => cart.id === state.id);
      if (cart) {
        const newLightCart = convertCart(cart);
        const isEqualProducts = isEqual(state.products, newLightCart.products);
        // eslint-disable-next-line no-param-reassign
        state = {
          ...state,
          ...newLightCart,
          // * To avoid unnecessary re-renders
          products: isEqualProducts ? state.products : newLightCart.products,
          productsIds: isEqualProducts ? state.productsIds : newLightCart.productsIds
        };
      }
    });
  }
});

export const cartSlice = cartSliceLazy.injectInto(rootReducer);

declare module '@/app/store/config' {
  export interface LazyLoadedSlices extends WithSlice<typeof cartSliceLazy> {}
}
