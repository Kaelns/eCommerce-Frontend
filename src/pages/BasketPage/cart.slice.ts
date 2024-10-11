import type { PayloadAction } from '@reduxjs/toolkit';
import type { Cart } from '@commercetools/platform-sdk';
import { createSlice } from '@reduxjs/toolkit';
import { MOCK_CART } from '@/services/ecommerce/constants';

const INIT_CART = {
  cart: MOCK_CART,
  discount: 0,
  isPromocode: false,
  deletionSignal: false
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: INIT_CART,
  selectors: {
    selectCart: (state) => state.cart,
    selectDiscount: (state) => state.discount,
    selectIsPromocode: (state) => state.isPromocode,
    selectDeletionSignal: (state) => state.deletionSignal
  },
  reducers: {
    setCartAction(state, action: PayloadAction<Cart>) {
      const {
        totalPrice: { centAmount },
        discountOnTotalPrice
      } = action.payload;

      const discountInMoney = discountOnTotalPrice?.discountedAmount?.centAmount ?? 0;

      state.cart = action.payload;
      state.discount = Math.round((discountInMoney / (centAmount + discountInMoney)) * 100);
    },

    resetCartAction(state) {
      state.cart = MOCK_CART;
      state.discount = 0;
      state.isPromocode = false;
      state.deletionSignal = false;
    },

    setIsPromocodeAction(state, action: PayloadAction<boolean>) {
      state.isPromocode = action.payload;
    },

    deletionSignalAction(state) {
      state.deletionSignal = !state.deletionSignal;
    }
  }
});

export const { selectCart, selectDiscount, selectIsPromocode, selectDeletionSignal } = cartSlice.selectors;
export const { setCartAction, resetCartAction, setIsPromocodeAction, deletionSignalAction } = cartSlice.actions;
