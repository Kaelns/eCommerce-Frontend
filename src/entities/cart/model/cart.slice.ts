import type { Cart } from '@commercetools/platform-sdk';
import type { WithSlice, PayloadAction } from '@reduxjs/toolkit';
import type { CartData, CartLight, CartLightAllProducts } from '@/entities/cart/model/types/cart.types';

import { isAnyOf, createSlice, createSelector } from '@reduxjs/toolkit';

import { cartApi } from '@/entities/cart/api/cartApi';
import { convertCart } from '@/entities/cart/lib/helpers/objects/convertCart';
import { updateCartSlice } from '@/entities/cart/lib/helpers/redux/updateCartSlice';
import { calculateFinalCartPrice } from '@/entities/cart/lib/helpers/numbers/calculateFinalCartPrice';
import { calculateCartProductsQuantity } from '@/entities/cart/lib/helpers/numbers/calculateCartProductsQuantity';

import { rootReducer } from '@/shared/lib/redux';

const INIT_CART: CartLight = {
  id: '',
  version: 0,

  products: {},
  productsIds: [],
  productsQuantity: 0
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

    selectCartFinalPriceObj: createSelector([(state) => state.products, (_state, country) => country], calculateFinalCartPrice)
  },
  reducers: {
    setCartDataAction(_state, action: PayloadAction<Cart>) {
      return convertCart(action.payload);
    },

    clearCartAction(state) {
      return {
        ...INIT_CART,
        id: state.id,
        version: state.version
      };
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
    },

    revertProductsAction(state, action: PayloadAction<CartLightAllProducts>) {
      const products = action.payload;

      state.products = products;
      state.productsIds = Object.keys(products);
      state.productsQuantity = calculateCartProductsQuantity(products);
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(cartApi.endpoints.getAllCarts.matchFulfilled, (state, action) => {
        const carts = action.payload.results;
        const isCartInSlice = Boolean(state.id);

        const cart = isCartInSlice ? carts.find((cart) => cart.id === state.id) : carts[0];

        if (cart) {
          return isCartInSlice ? updateCartSlice(cart, state) : convertCart(cart);
        }
      })
      // * Pessimistic update with util.updateQueryData doesn't evoke matchFulfilled
      .addMatcher(isAnyOf(cartApi.endpoints.createCart.matchFulfilled, cartApi.endpoints.updateCart.matchFulfilled), (state, action) => {
        const cart = action.payload;
        if (cart) {
          return updateCartSlice(cart, state);
        }
      })
      .addMatcher(cartApi.endpoints.deleteCart.matchFulfilled, () => {
        return INIT_CART;
      });
  }
});

export const cartSlice = cartSliceLazy.injectInto(rootReducer);

declare module '@/shared/lib/redux/redux.config' {
  export interface LazyLoadedSlices extends WithSlice<typeof cartSliceLazy> {}
}

export const { selectCartProductLineId, selectCartIdAndVersion, selectCartProductById } = cartSlice.selectors;
export const { deleteProductAction, decrementQuantityAction, incrementQuantityAction } = cartSlice.actions;
