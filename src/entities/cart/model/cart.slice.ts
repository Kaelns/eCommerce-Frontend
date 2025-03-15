import type { Cart } from '@commercetools/platform-sdk';
import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CartData, CartLight, CartLightAllProducts } from '@/entities/cart/model/types/cart.types';

import { isEqual } from 'lodash';
import { createSlice, createSelector } from '@reduxjs/toolkit';

import { cartApi } from '@/entities/cart/api/cartApi';
import { convertCart } from '@/entities/cart/lib/helpers/objects/convertCart';
import { calculateFinalCartPrice } from '@/entities/cart/lib/helpers/numbers/calculateFinalCartPrice';
import { calculateCartProductsQuantity } from '@/entities/cart/lib/helpers/numbers/calculateCartProductsQuantity';

import { rootReducer } from '@/shared/lib/redux';

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
    selectCartId: (state) => state.id,
    selectCartIdAndVersion: createSelector(
      [(state) => state.id, (state) => state.version],
      (cartId, version) => ({ cartId, version }) as CartData
    ),

    selectCartProducts: (state) => state.products,
    selectCartProductsIds: (state) => state.productsIds,
    selectCartProductById: (state, productId) => state.products[productId],
    selectCartProductLineId: (state, productId) => state.products[productId]?.cartProductLineId || undefined,

    selectCartProductQuantity: (state) => state.productsQuantity,
    selectCartDiscount: (state) => state.discount,
    selectCartIsPromocode: (state) => state.isPromocode,

    selectCartFinalPriceObj: createSelector(
      [(state): CartLightAllProducts => state.cartProducts, (_state, language) => language, (_state, _language, country) => country],
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

    clearCartAction(state) {
      state.products = INIT_CART.products;
      state.productsIds = INIT_CART.productsIds;
      state.productsQuantity = INIT_CART.productsQuantity;
      state.discount = INIT_CART.discount;
    },

    revertProductsAction(state, action: PayloadAction<CartLightAllProducts>) {
      const products = action.payload;

      state.products = products;
      state.productsIds = Object.keys(products);
      state.productsQuantity = calculateCartProductsQuantity(products);
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
      if (!state.id) {
        const cart = action.payload.results[0];
        if (cart) {
          return convertCart(cart);
        }
      } else {
        // * Update cart
        const cart = action.payload.results.find((cart) => cart.id === state.id);
        if (cart) {
          const newLightCart = convertCart(cart);
          const isEqualProducts = isEqual(state.products, newLightCart.products);
          return {
            ...newLightCart,
            // * To avoid unnecessary re-renders
            products: isEqualProducts ? state.products : newLightCart.products,
            productsIds: isEqualProducts ? state.productsIds : newLightCart.productsIds
          };
        }
      }
    });
  }
});

export const cartSlice = cartSliceLazy.injectInto(rootReducer);

declare module '@/shared/lib/redux/redux.config' {
  export interface LazyLoadedSlices extends WithSlice<typeof cartSliceLazy> {}
}

export const { selectCartProductLineId, selectCartIdAndVersion, selectCartProductById } = cartSlice.selectors;
export const { deleteProductAction, decrementQuantityAction, incrementQuantityAction, setQuantityAction } = cartSlice.actions;
