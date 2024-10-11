import type { ICartProducts } from '@/shared/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { cartSlice } from '@/pages/BasketPage/cart.slice';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { calculatePrice } from '@/pages/BasketPage/helpers/calculatePrice';
import { calculateQuantity } from '@/pages/BasketPage/helpers/calculateAmount';
import { convertToBasketProducts } from '@/pages/BasketPage/helpers/convertToBasketProducts';

const INIT_CART_PRODUCTS = {
  cartProducts: {} as ICartProducts,
  finalPrice: 0,
  productQuantity: 0,
  isPromocode: false
};

export const cartProductsSlice = createSlice({
  name: 'cartProducts',
  initialState: INIT_CART_PRODUCTS,
  selectors: {
    selectCartProducts: (state) => state.cartProducts,
    selectProductQuantityCart: (state) => state.productQuantity,
    selectFinalPriceCart: createSelector([(state): ICartProducts => state.cartProducts], calculatePrice),
    selectIsPromocode: (state) => state.isPromocode
  },
  reducers: {
    // setCartProductsAction(state, action: PayloadAction<ICartProducts>) {
    //   state.cartProducts = action.payload;
    //   state.productQuantity = calculateQuantity(action.payload);
    // },

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
    },

    setIsPromocodeAction(state, action: PayloadAction<boolean>) {
      state.isPromocode = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(cartSlice.actions.setCartAction, (state, action) => {
      state.cartProducts = convertToBasketProducts(action.payload.lineItems);
      state.productQuantity = calculateQuantity(action.payload.lineItems);
    });
  }
});

export const { selectCartProducts, selectFinalPriceCart, selectProductQuantityCart } = cartProductsSlice.selectors;
